import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error");
        setMessage("Verification token is missing.");
        return;
      }

      try {
        await axiosInstance.get("/auth/verify-email", { params: { token } });

        setStatus("success");
        setMessage("Your email has been verified successfully.");
      } catch (error) {
        setStatus("error");

        setMessage(
          error.response?.data?.message ||
            "This verification link is invalid or has expired."
        );
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

        {status === "verifying" && (
          <>
            <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-black" />

            <h1 className="text-2xl font-semibold">
              Verifying your email
            </h1>

            <p className="mt-3 text-gray-500">
              Please wait while we verify your email address.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              ✓
            </div>

            <h1 className="text-2xl font-semibold">
              Email Verified
            </h1>

            <p className="mt-3 text-gray-500">
              {message}
            </p>

            <Link
              to="/login"
              className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            >
              Continue to Login
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
              !
            </div>

            <h1 className="text-2xl font-semibold">
              Verification Failed
            </h1>

            <p className="mt-3 text-gray-500">
              {message}
            </p>

            <Link
              to="/login"
              className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
            >
              Back to Login
            </Link>
          </>
        )}

      </div>
    </div>
  );
};

export default VerifyEmail;
