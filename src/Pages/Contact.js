import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  // Use your actual ID here
  const [state, handleSubmit] = useForm("xqadargb");

  const Social = ({ href, label, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
      title={label}
    >
      {children}
    </a>
  );

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 text-white scroll-mt-24">
      {/* ... your decorative blobs and heading stay the same ... */}

      <div className="mt-10 mx-auto max-w-2xl">
        {/* Success message */}
        {state.succeeded ? (
          <div className="rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-400/20 p-5 text-emerald-200 text-center">
            Thanks! I’ll answer as soon as possible.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xqadargb"  /* optional HTML fallback */
            method="POST"
          
            className="
              relative rounded-3xl bg-white/5 p-6 md:p-8 ring-1 ring-white/10 shadow-xl backdrop-blur
              before:absolute before:inset-0 before:-z-10 before:rounded-3xl
              before:bg-gradient-to-tr before:from-red-500/10 before:to-indigo-500/10
            "
            aria-describedby="contact-status"
          >
            {/* Name */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="name">Name</label>
                <input
                  id="name" name="name" placeholder="Your name"
                  className="h-11 w-full rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/15 placeholder:text-white/50 focus:bg-white/15 focus:ring-2 focus:ring-red-400/70 transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" placeholder="you@example.com"
                  className="h-11 w-full rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/15 placeholder:text-white/50 focus:bg-white/15 focus:ring-2 focus:ring-red-400/70 transition"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-300" />
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows="5" placeholder="Tell me about your project or opportunity…"
                className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/15 placeholder:text-white/50 focus:bg-white/15 focus:ring-2 focus:ring-red-400/70 transition"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-300" />
            </div>

            {/* Submit */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-red-500/30 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        )}

        <p className="mt-4 text-center text-xs text-white/50">
        </p>
      </div>
    </section>
  );
}
