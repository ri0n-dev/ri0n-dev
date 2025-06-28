"use client"

import { useEffect, useState } from "react"

export default function Spotlight() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleScroll = () => {
            const sections = ["home", "about", "works"]
            const scrollPosition = window.scrollY + 200

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <div
                className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)`,
                }}
            />

            <div className="fixed inset-0 pointer-events-none z-20">
                <div
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${activeSection === "home"
                            ? "bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent"
                            : activeSection === "about"
                                ? "bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent"
                                : activeSection === "works"
                                    ? "bg-gradient-radial from-green-500/10 via-green-500/5 to-transparent"
                                    : ""
                        }`}
                    style={{
                        background:
                            activeSection === "home"
                                ? "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)"
                                : activeSection === "about"
                                    ? "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 100%)"
                                    : activeSection === "works"
                                        ? "radial-gradient(ellipse 80% 50% at 50% 70%, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 100%)"
                                        : "",
                    }}
                />
            </div>
            <div className="fixed inset-0 pointer-events-none z-25">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>
        </>
    )
}
