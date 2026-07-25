import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-slate-950">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-5xl font-bold text-slate-900 dark:text-white">
            Contact Us
          </h1>

          <p className="mb-10 text-center text-slate-600 dark:text-slate-300">
            Have a question, suggestion, or opportunity to share? We'd love to
            hear from you.
          </p>

          <form className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-800">
            {/* Full Name */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
