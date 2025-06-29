"use client"

import Link from "next/link"
import { HomeIcon as House, UserRound, BriefcaseBusiness, Send } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    const handleScroll = () => {
      for (const section of ["home", "about", "works"]) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (window.scrollY + 100 >= offsetTop && window.scrollY + 100 < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const getLinkClassName = (section: string) => {
    const baseClass = "flex items-center gap-x-2 transition-all duration-300 relative"
    const activeClass = "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] filter brightness-150"
    const inactiveClass = "text-neutral-300 hover:text-neutral-100"

    return `${baseClass} ${activeSection === section ? activeClass : inactiveClass}`
  }

  return (
    <>
      <div className="hidden sm:flex fixed font-inter gap-x-2 top-0 w-full justify-center z-50">
        <div className={`mt-4 flex items-center gap-4 px-6 py-2 text-neutral-100 bg-neutral-900/80 backdrop-blur-md rounded-full border border-neutral-800 shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.05)] ${isLoaded ? "translate-y-0 opacity-100 scale-100" : "-translate-y-8 opacity-0 scale-95"}`} style={{ transitionDelay: isLoaded ? "0ms" : "0ms" }}>
          <Link href="/#home" className={`${getLinkClassName("home")} ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)", transitionDelay: isLoaded ? "200ms" : "0ms" }}><House size={16} /> Home</Link>
          <Link href="/#about" className={`${getLinkClassName("about")} ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)", transitionDelay: isLoaded ? "300ms" : "0ms" }}><UserRound size={16} /> About</Link>
          <Link href="/#works" className={`${getLinkClassName("works")} ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)", transitionDelay: isLoaded ? "400ms" : "0ms" }}><BriefcaseBusiness size={16} /> Works</Link>
        </div>

        <div className={`mt-4 items-center gap-4 px-6 py-2 text-neutral-100 bg-neutral-900/60 backdrop-blur-md rounded-full border border-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)] transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.05)] ${isLoaded ? "translate-y-0 opacity-100 scale-100" : "-translate-y-8 opacity-0 scale-95"}`} style={{ transitionDelay: isLoaded ? "100ms" : "0ms" }}>
          <Link href="mailto:hi@ri0n.dev" className={`flex items-center gap-x-2 font-medium text-neutral-100 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)", transitionDelay: isLoaded ? "500ms" : "0ms" }}><Send size={16} /> Contact</Link>
        </div>
      </div >

      <div className="flex sm:hidden fixed font-inter gap-x-2 top-0 w-full justify-center px-3 z-50">
        <div className={`mt-4 flex text-sm items-center gap-4 text-neutral-100 bg-neutral-900/80 backdrop-blur-md rounded-full border border-neutral-800 shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)] ${isLoaded ? "translate-y-0 opacity-100 scale-100" : "-translate-y-8 opacity-0 scale-95"}`}>
          <Link href="/#home" className={`flex ml-6 items-center gap-x-2 transition-all duration-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isLoaded ? "200ms" : "0ms" }}><House size={14} /> Home</Link>
          <div className={`items-center gap-4 px-6 py-2.5 text-neutral-100 bg-neutral-900/60 backdrop-blur-md rounded-full border border-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)] ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} style={{ transitionDelay: isLoaded ? "300ms" : "0ms" }}>
            <Link href="mailto:hi@ri0n.dev" className="flex items-center gap-x-2 font-medium"><Send size={14} /> Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}
