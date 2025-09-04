"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message sent ✅");
      e.currentTarget.reset();
    } else {
      setStatus("Failed to send ❌");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border p-2 rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your phone number"
        required
        pattern="[0-9]{10}"
        className="border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
      <p>{status}</p>
    </form>
  );
}
