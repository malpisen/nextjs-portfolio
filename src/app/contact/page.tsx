import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="content-grid gap-4">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 rounded-4xl inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-orange-200 via-rose-200 to-violet-200" />
        <div className="relative max-w-4xl my-10 mx-30 grid items-center">
          <h2 className="text-4xl text-center mb-5">Get in touch</h2>
          <div className="grid md:grid-cols-2 text-center">
            <div>
              <p>
                Don't hesitate to reach out — whether you're looking for a
                developer, have a question, want to exchange ideas, or simply
                want to say hi!
              </p>
            </div>
            <div>
              <p>Email: XXXXX@XXXXXX.XXX</p>
              <p>Phone: +46XXXXXXXXXX</p>
              <Link href="https://www.linkedin.com/in/malin-rydefalk/">
                LinkedIn: linkedin.com/in/malin-rydefalk
              </Link>
              <br />
              <Link href="https://www.github.com/malpisen">
                GitHub: github.com/malpisen
              </Link>
              <br />
              <p>Location: Stockholm, Sweden</p>
            </div>
          </div>
          <form>
            <label htmlFor="name" className="block p-1 mt-5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
              className="input-field w-full"
            />

            <label htmlFor="email" className="block p-1 mt-5">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
              required
              className="input-field w-full"
            />

            <label htmlFor="message" className="block p-1 mt-5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message..."
              required
              className="input-field w-full resize-none"
            ></textarea>

            <button
              type="submit"
              className="button py-1 px-5 text-lg place-self-center"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
