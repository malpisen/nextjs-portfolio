export default function ContactForm() {
  return (
    <form>
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

      <button type="submit" className="button py-1 px-5 place-self-center">
        Send
      </button>
    </form>
  );
}
