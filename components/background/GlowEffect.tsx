"use client"

import { useEffect, useRef } from "react"

export function BackgroundGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return

      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      // Subtle movement based on mouse position (20% influence)
      const moveX = (e.clientX - centerX) * 0.1
      const moveY = (e.clientY - centerY) * 0.1

      glowRef.current.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
      }}
    >
      <div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: "clamp(300px, 50vw, 600px)",
          height: "clamp(300px, 50vw, 600px)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  )
}