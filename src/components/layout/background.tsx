"use client"

import { useEffect, useRef } from "react"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const dpr = window.devicePixelRatio || 1
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr, dpr)

        const width = canvas.width
        const height = canvas.height
        const imageData = ctx.createImageData(width, height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random()
            const intensity = noise * 70
            data[i] = intensity
            data[i + 1] = intensity
            data[i + 2] = intensity
            data[i + 3] = intensity * 0.4
        }

        ctx.putImageData(imageData, 0, 0)
    }, [])

    return (
        <>
            <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-100" style={{ mixBlendMode: "screen" }} />
            {children}
        </>
    )
}
