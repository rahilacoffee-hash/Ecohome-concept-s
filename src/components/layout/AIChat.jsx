import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FiSend,
  FiX,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";

import { RiRobot2Line } from "react-icons/ri";

const GROQ_API_KEY =
  import.meta.env
    .VITE_GROQ_API_KEY;

const SYSTEM_PROMPT = `You are the official AI assistant for Tailored — a mobile app built for tailors and fashion designers in Africa, starting in Nigeria.

Your job is to help users understand the app, answer questions, and guide them.

Key facts about Tailored:
- Tailored helps tailors manage customers, save measurements, track orders, and monitor payments
- It is built for Nigerian/African tailors and fashion designers
- Features: Digital Measurements, Customer Management, Order Tracking, Payment Management, Smart Reminders, Cloud Backup, AI Measurement (coming soon), WhatsApp Integration (coming soon)
- The app is currently in waitlist/pre-launch stage
- Contact: Tailoredtailorhub@gmail.com | +234 8165 662 099 | Abuja, Nigeria
- Future vision: AI Body Measurement, Tailor Marketplace, Analytics Dashboard, Multi-shop Management

Keep answers concise, friendly, and helpful. If asked something unrelated to Tailored, politely redirect to Tailored topics.`;

const SUGGESTED = [
  "What is Tailored?",
  "How do I join the waitlist?",
  "What features does it have?",
  "When is it launching?",
  "Is my data secure?",
];

const TypingDots = () => (
  <div className="flex items-center gap-1 px-1 py-0.5">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[#8B0000]/60"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
);

export default function AIChat() {
  const [open, setOpen] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        content:
          "Hey! 👋 I'm the Tailored AI assistant. Ask me anything about the app — features, waitlist, how it works, or anything else!",
      },
    ]);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const bottomRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [open]);

  const sendMessage = async (
    text
  ) => {
    const userText =
      text || input.trim();

    if (
      !userText ||
      loading
    )
      return;

    const newMessages = [
      ...messages,
      {
        role: "user",
        content: userText,
      },
    ];

    setMessages(newMessages);

    setInput("");

    setLoading(true);

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${GROQ_API_KEY}`,
          },

          body: JSON.stringify({
            model:
              "llama-3.1-8b-instant",

            messages: [
              {
                role: "system",
                content:
                  SYSTEM_PROMPT,
              },

              ...newMessages.map(
                (m) => ({
                  role: m.role,
                  content:
                    m.content,
                })
              ),
            ],

            max_tokens: 400,

            temperature: 0.7,
          }),
        }
      );

      if (!res.ok) {
        let errData =
          await res
            .json()
            .catch(() => ({}));

        throw new Error(
          errData?.error
            ?.message ||
            `Error ${res.status}`
        );
      }

      const data =
        await res.json();

      const reply =
        data.choices?.[0]
          ?.message?.content ||
        "Sorry, I couldn't get a response.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (err) {
      console.error(
        "Groq error:",
        err.message
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ ${err.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      sendMessage();
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}

      <motion.button
        onClick={() =>
          setOpen((v) => !v)
        }
        className="
        fixed
        bottom-4
        right-4
        sm:bottom-6
        sm:right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-[#8B0000]
        text-white
        shadow-2xl
        shadow-red-900/30
        flex
        items-center
        justify-center
        "
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={
          open
            ? {}
            : {
                y: [0, -4, 0],
              }
        }
        transition={{
          duration: 2.5,
          repeat: open
            ? 0
            : Infinity,
          ease: "easeInOut",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{
                rotate: -90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                rotate: 90,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <FiX className="text-xl" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{
                rotate: 90,
                opacity: 0,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                rotate: -90,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <FiMessageCircle className="text-xl" />
            </motion.div>
          )}
        </AnimatePresence>

        {!open && (
          <motion.div
            className="
            absolute
            inset-0
            rounded-full
            border-2
            border-[#8B0000]/40
            "
            animate={{
              scale: [1, 1.6],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        )}
      </motion.button>

      {/* CHAT PANEL */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
              ease: [
                0.34,
                1.06,
                0.64,
                1,
              ],
            }}
            className="
            fixed
            bottom-20
            right-3
            left-3
            sm:left-auto
            sm:right-6
            sm:bottom-24
            z-50

            w-auto
            sm:w-[400px]

            h-[78vh]
            sm:h-[560px]

            rounded-3xl
            overflow-hidden

            flex
            flex-col

            shadow-2xl
            shadow-black/20

            border
            border-black/5

            bg-white
            dark:bg-[#050505]
            "
            style={{
              fontFamily:
                "'Helvetica Neue', Helvetica, sans-serif",
            }}
          >
            {/* HEADER */}

            <div
              className="
              bg-[#8B0000]
              px-5
              py-4
              flex
              items-center
              gap-3
              flex-shrink-0
              "
            >
              <div
                className="
                w-9
                h-9
                rounded-full
                bg-white/15
                flex
                items-center
                justify-center
                "
              >
                <RiRobot2Line className="text-white text-lg" />
              </div>

              <div>
                <p
                  className="
                  text-white
                  font-bold
                  text-sm
                  leading-none
                  "
                >
                  Tailored AI
                </p>

                <div className="flex items-center gap-1.5 mt-1">
                  <div
                    className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-green-400
                    "
                  />

                  <p
                    className="
                    text-white/70
                    text-[10px]
                    "
                  >
                    Online · Always
                    ready
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="
                ml-auto
                text-white/60
                hover:text-white
                transition-colors
                "
              >
                <FiX />
              </button>
            </div>

            {/* WARNING */}

            {!GROQ_API_KEY && (
              <div
                className="
                bg-red-50
                border-b
                border-red-100
                px-4
                py-2.5
                "
              >
                <p
                  className="
                  text-xs
                  text-red-700
                  "
                >
                  ⚠️ Missing
                  VITE_GROQ_API_KEY
                </p>
              </div>
            )}

            {/* MESSAGES */}

            <div
              className="
              flex-1
              overflow-y-auto

              bg-[#FFF9F5]
              dark:bg-black

              px-4
              py-4

              space-y-3
              "
            >
              {messages.map(
                (msg, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`flex items-end gap-2 ${
                      msg.role ===
                      "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div
                      className={`
                      flex-shrink-0
                      w-7
                      h-7
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-xs

                      ${
                        msg.role ===
                        "user"
                          ? "bg-black text-white"
                          : "bg-[#8B0000] text-white"
                      }
                    `}
                    >
                      {msg.role ===
                      "user" ? (
                        <FiUser className="text-xs" />
                      ) : (
                        <RiRobot2Line className="text-xs" />
                      )}
                    </div>

                    <div
                      className={`
                      max-w-[82%]
                      px-4
                      py-2.5
                      rounded-2xl
                      text-sm
                      leading-relaxed

                      ${
                        msg.role ===
                        "user"
                          ? "bg-[#8B0000] text-white rounded-br-sm"
                          : "bg-white dark:bg-[#111111] text-black dark:text-white border border-black/5 dark:border-white/5 rounded-bl-sm shadow-sm"
                      }
                    `}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                )
              )}

              {loading && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                  flex
                  items-end
                  gap-2
                  "
                >
                  <div
                    className="
                    w-7
                    h-7
                    rounded-full
                    bg-[#8B0000]
                    text-white
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <RiRobot2Line className="text-xs" />
                  </div>

                  <div
                    className="
                    bg-white
                    dark:bg-[#111111]
                    border
                    border-black/5
                    dark:border-white/5
                    rounded-2xl
                    rounded-bl-sm
                    px-4
                    py-2.5
                    shadow-sm
                    "
                  >
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* SUGGESTIONS */}

            {messages.length ===
              1 && (
              <div
                className="
                bg-[#FFF9F5]
                dark:bg-black
                px-4
                pb-2
                flex
                flex-wrap
                gap-2
                "
              >
                {SUGGESTED.map(
                  (s, i) => (
                    <motion.button
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          0.1 +
                          i * 0.06,
                      }}
                      onClick={() =>
                        sendMessage(
                          s
                        )
                      }
                      className="
                      text-[11px]
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-[#8B0000]/25
                      text-[#8B0000]
                      bg-white
                      hover:bg-[#8B0000]
                      hover:text-white
                      transition-colors
                      duration-200
                      "
                    >
                      {s}
                    </motion.button>
                  )
                )}
              </div>
            )}

            {/* INPUT */}

            <div
              className="
              bg-white
              dark:bg-[#050505]
              border-t
              border-black/5
              dark:border-white/5

              px-3
              sm:px-4
              py-3

              flex
              items-center
              gap-2
              sm:gap-3
              "
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }
                onKeyDown={
                  handleKey
                }
                placeholder="Ask me anything..."
                className="
                flex-1

                bg-[#F5F0EB]
                dark:bg-[#111111]

                rounded-full

                px-4
                py-2.5

                text-sm
                text-black
                dark:text-white

                outline-none

                placeholder:text-black/30
                dark:placeholder:text-white/30
                "
              />

              <motion.button
                onClick={() =>
                  sendMessage()
                }
                disabled={
                  !input.trim() ||
                  loading
                }
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                w-10
                h-10
                rounded-full

                bg-[#8B0000]
                text-white

                flex
                items-center
                justify-center

                disabled:opacity-30
                transition-opacity

                flex-shrink-0
                "
              >
                <FiSend className="text-sm" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}