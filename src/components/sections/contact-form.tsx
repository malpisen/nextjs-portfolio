"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvgvaoqz");
  if (state.succeeded) {
    return (
      <p className="text-2xl text-center font-nuntino font-semibold">
        Thank you for your message, I will get back to you as soon as possible!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="place-self-center min-w-2xl">
      <label htmlFor="name" className="block p-1">
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

      <label htmlFor="email" className="block p-1">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="example@domain.com"
        required
        className="input-field w-full"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="block p-1">
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
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="button py-1 px-5 place-self-center"
      >
        Send
      </button>
    </form>
  );
}
