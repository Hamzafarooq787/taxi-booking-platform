"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="hidden md:block">
          <h1 className="text-4xl font-extrabold leading-tight">
            Welcome to <span className="text-[#fff700]">ZappyTaxis</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-md">
            Your premium taxi booking platform. Secure, fast, and reliable rides
            across the UK.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-white/80">
            <li>• Trusted UK-wide taxi network</li>
            <li>• Transparent pricing</li>
            <li>• Secure accounts & bookings</li>
          </ul>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-white text-black rounded-3xl shadow-2xl p-8 w-full">
          {/* TOGGLE */}
          <div className="flex mb-6 bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => {
                setMode("login");
                setError(null);
              }}
              className={`flex-1 rounded-lg py-2 text-sm font-bold transition ${
                mode === "login"
                  ? "bg-black text-[#fff700]"
                  : "text-slate-600"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setMode("signup");
                setError(null);
              }}
              className={`flex-1 rounded-lg py-2 text-sm font-bold transition ${
                mode === "signup"
                  ? "bg-black text-[#fff700]"
                  : "text-slate-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* FORM */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setError("Email or password incorrect");
            }}
          >
            {mode === "signup" && (
              <Input label="Full Name" type="text" />
            )}

            <Input label="Email Address" type="email" />
            <Input label="Password" type="password" />

            <button
              type="submit"
              className="w-full rounded-xl bg-black py-3 text-sm font-extrabold text-[#fff700] hover:opacity-90 transition"
            >
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
            <span className="h-px flex-1 bg-slate-300" />
            OR
            <span className="h-px flex-1 bg-slate-300" />
          </div>

          {/* SOCIAL */}
          <div className="space-y-3">
            <button className="w-full rounded-xl border px-4 py-3 text-sm font-semibold hover:bg-slate-50 transition">
              Continue with Google
            </button>
            <button className="w-full rounded-xl border px-4 py-3 text-sm font-semibold hover:bg-slate-50 transition">
              Continue with Facebook
            </button>
          </div>

          {/* FOOTER */}
          <p className="mt-6 text-center text-xs text-slate-500">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>{" "}
            &{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

/* ================== INPUT COMPONENT ================== */

function Input({
  label,
  type,
}: {
  label: string;
  type: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600">
        {label}
      </label>
      <input
        type={type}
        required
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-black"
      />
    </div>
  );
}
