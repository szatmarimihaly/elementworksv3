"use client";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function SendForm() {
  const [status, setStatus] = useState(""); // message to display
  const [loading, setLoading] = useState(false); // loading state

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/send", { method: "POST", body: form });
      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Email elküldve! Hamarosan válaszolunk.");
        e.currentTarget.reset(); // clear the form
      } else {
        // display backend error if any
        setStatus(`❌ Hiba: ${data.error || "Nem sikerült elküldeni az emailt."}`);
      }
    } catch (err: unknown) {
      // handle unexpected network or fetch errors
      const message = err instanceof Error ? err.message : String(err);
      setStatus(`❌ Hiba történt: ${message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-10 section-top">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 w-full max-w-md"
      />
      <input
        name="email"
        type="email"
        placeholder="your.email@gmail.com"
        required
        className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 w-full max-w-md"
      />
      <input
        name="tel"
        type="tel"
        placeholder="+36305771066"
        required
        className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 w-full max-w-md"
      />
      <textarea
        name="message"
        placeholder="Üzenet ide..."
        required
        rows={2}
        className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 w-full max-w-md"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-white text-black px-10 py-2 font-bold rounded-full transition-all duration-300 hover:bg-white/80"
      >
        {loading ? <CircularProgress size={20} sx={{ color: "black" }} /> : "Send message"}
      </button>

      {status && (
        <p className="text-center text-sm mt-2 break-words">{status}</p>
      )}
    </form>
  );
}
