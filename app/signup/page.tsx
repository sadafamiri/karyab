"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    register(name, email, password);

    alert("Account created successfully!");

    router.push("/signin");
  }

  return (
    <section className="min-h-screen bg-slate-50 py-20 dark:bg-slate-950 transition-colors">
      <Container>
        <div className="mx-auto max-w-md rounded-2xl border bg-white p-8 shadow dark:border-slate-700 dark:bg-slate-900">
          <h1 className="mb-8 text-center text-4xl font-bold text-slate-900 dark:text-white">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-medium dark:text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Sadaf Amiri"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border p-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              />
            </div>

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
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-slate-600 dark:text-slate-300">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-semibold text-blue-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
