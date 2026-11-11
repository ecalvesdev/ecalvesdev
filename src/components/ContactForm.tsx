"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setError("Informe seu nome.");
      return;
    }
    if (trimmedMessage.length < 8) {
      setError("Escreva uma mensagem um pouco mais completa.");
      return;
    }

    setError(null);
    window.location.assign(buildWhatsAppUrl(trimmedName, trimmedMessage));
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-panel p-6 shadow-[0_30px_80px_-30px_color-mix(in_srgb,var(--accent-violet)_45%,transparent)] md:p-8"
      noValidate
    >
      <p className="text-sm text-muted">{contact.formHint}</p>
      <div className="space-y-2">
        <label htmlFor="contact-name" className="block text-sm text-muted">
          Nome
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-[var(--radius-sm)] border border-transparent bg-white/[0.05] px-3 py-3 text-ink outline-none transition focus:border-lilac"
          placeholder="Seu nome"
          required
          minLength={2}
          maxLength={80}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="block text-sm text-muted">
          Mensagem
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-32 w-full resize-y rounded-[var(--radius-sm)] border border-transparent bg-white/[0.05] px-3 py-3 text-ink outline-none transition focus:border-lilac"
          placeholder="Conte brevemente o que você precisa"
          required
          minLength={8}
          maxLength={1000}
        />
      </div>
      {error ? (
        <p className="text-sm text-lilac" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="btn btn-primary w-full sm:w-auto"
      >
        Enviar no WhatsApp
      </button>
    </form>
  );
}
