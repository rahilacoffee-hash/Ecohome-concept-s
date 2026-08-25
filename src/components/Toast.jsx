import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback((message, type = "error", action) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, message, type, action }]);
    if (!action) window.setTimeout(() => dismiss(id), 5000);
    return id;
  }, [dismiss]);

  const toast = useMemo(() => ({
    success: (message) => show(message, "success"),
    error: (message) => show(message, "error"),
    confirm: (message, onConfirm) => show(message, "info", { label: "Confirm", onClick: onConfirm }),
  }), [show]);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed right-4 top-4 z-[100] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3">
        {toasts.map((item) => (
          <div key={item.id} role="status" className={`rounded-xl border p-4 shadow-lg ${item.type === "success" ? "border-green-200 bg-green-50 text-green-800" : item.type === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-blue-200 bg-white text-[#102A72]"}`}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium">{item.message}</p>
              {item.action && <button type="button" onClick={() => { item.action.onClick(); dismiss(item.id); }} className="shrink-0 rounded-lg bg-[#102A72] px-3 py-1.5 text-xs font-bold text-white">{item.action.label}</button>}
              <button type="button" aria-label="Dismiss notification" onClick={() => dismiss(item.id)} className="shrink-0 text-lg leading-none opacity-60 hover:opacity-100">×</button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const toast = useContext(ToastContext);
  if (!toast) throw new Error("useToast must be used within ToastProvider");
  return toast;
}
