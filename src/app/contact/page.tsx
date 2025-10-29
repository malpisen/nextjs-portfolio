import Link from "next/link";
import ContactForm from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0 rounded-4xl inset-shadow-[0_0_60px_70px_white] 
        bg-gradient-to-bl from-orange-200/80 via-rose-200/80 to-violet-200/80"
      />
      <div className="relative my-10 mx-30 grid items-center gap-4">
        <h2 className="text-center">Get in touch</h2>
        <div className="grid md:grid-cols-2 text-center gap-3">
          <p>
            Don&apos;t hesitate to reach out — whether you&apos;re looking for a
            developer, have a question, want to exchange ideas, or simply just
            want to say hi!
          </p>
          <div>
            <Link href="mailto:malin.rydefalk@gmail.com">
              malin.rydefalk@gmail.com
            </Link>
            <br />
            <Link href="tel:+46700497740">+46(0)70 049 77 40</Link>
            <br />
            <Link href="https://www.linkedin.com/in/malin-rydefalk/">
              linkedin.com/in/malin-rydefalk
            </Link>
            <br />
            <Link href="https://www.github.com/malpisen">
              github.com/malpisen
            </Link>
            <br />
            <p>📍 Stockholm, Sweden</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
