"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const success = login(email, password);

    if (success) {
      alert("Login Successful!");
      router.push("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  }

  return (
    <section className="min-h-screen bg-slate-50 py-20 transition-colors dark:bg-slate-950">
      <Container>
        <div className="mx-auto max-w-md rounded-2xl border bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
          <h1 className="mb-8 text-center text-4xl font-bold text-slate-900 dark:text-white">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-medium dark:text-white">
                Email
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border p-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium dark:text-white">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border p-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-slate-600 dark:text-slate-300">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
