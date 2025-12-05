"use client"
import { useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';


export default function SendForm() {

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setLoading(true)
        setStatus("")

        const form = new FormData(e.currentTarget);

        try {
            const res = await fetch("/api/send", { 
                method: "POST",
                body: form 
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("✅ Email elküldve! Hamarosan válaszolunk.");
                e.currentTarget.reset(); // Clear the form
            } else {
                setStatus(`❌ Hiba: ${data.error || "Nem sikerült elküldeni az emailt."}`);
            }
        } catch (error) {
            setStatus("❌ Hiba történt. Próbáld újra később.");
        } finally {
            setLoading(false);
        }
    }

  return (
    <form   
        onSubmit={handleSubmit}
        className='flex flex-col items-center gap-10 section-top'
    >
        <input
            className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 focus:outline-none text-gray-300 w-full mx-auto max-w-md"
            name="name" 
            type="name" 
            placeholder="Name" 
            required 
        />

        <input
            className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 focus:outline-none text-gray-300 w-full mx-auto max-w-md" 
            name="email" 
            type="email" 
            placeholder="your.email@gmail.com" 
            required 
        />

        <input 
            className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 focus:outline-none text-gray-300 w-full mx-auto max-w-md"
            name="tel" 
            type="tel" 
            placeholder="+36305771066" 
            required
        />

        <textarea 
            className="bg-white/5 px-4 py-2 rounded-xl border-2 border-gray-400/40 focus:outline-none text-gray-300 w-full mx-auto max-w-md"
            name="message" 
            placeholder="Üzenet ide..." 
            required 
            rows={2}
        />

        <button
            type="submit"
            disabled={loading}
            className="bg-white text-black px-10 py-2 font-bold rounded-full transition-all duration-300 hover:bg-white/80">
            {loading ? <CircularProgress size={20} sx={{ color:"black" }}/> : "Send message"}
        </button>
        {status && (
            <p className="text-center text-sm mt-2">{status}</p>
        )}
    </form>
  )
}