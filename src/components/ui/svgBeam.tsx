"use client"

import { useEffect, useRef, useState } from "react"

interface SVGPathAnimationProps {
  svgPath: string
  size?: number
  strokeWidth?: number
  strokeColor?: string
  dashLength?: number
  duration?: number
  className?: string
}

export default function SVGPathAnimation({
  svgPath,
  size = 200,
  strokeWidth = 2,
  strokeColor = "#000",
  dashLength = 0.3,
  duration = 2000,
  className = "",
}: SVGPathAnimationProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [responsiveSize, setResponsiveSize] = useState(size)

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(svgPath)
        if (!response.ok) throw new Error("Failed to load SVG")
        const text = await response.text()
        setSvgContent(text)
      } catch (error) {
        console.error("Error loading SVG:", error)
      }
    }

    fetchSVG()
  }, [svgPath])

  useEffect(() => {
    if (!svgContent || !containerRef.current) return

    containerRef.current.innerHTML = svgContent

    const svgElement = containerRef.current.querySelector("svg")
    if (!svgElement) return

    if (!svgElement.getAttribute("viewBox")) {
      const width = svgElement.getAttribute("width") || "100"
      const height = svgElement.getAttribute("height") || "100"
      svgElement.setAttribute("viewBox", `0 0 ${width} ${height}`)
    }

    svgElement.setAttribute("width", responsiveSize.toString())
    svgElement.setAttribute("height", responsiveSize.toString())

    const paths = svgElement.querySelectorAll("path")

    paths.forEach((path) => {
      path.setAttribute("stroke", strokeColor)
      path.setAttribute("stroke-width", strokeWidth.toString())
      path.setAttribute("fill", "none")
      path.setAttribute("stroke-linecap", "round")

      const pathLength = path.getTotalLength()

      const visibleLength = pathLength * dashLength
      path.style.strokeDasharray = `${visibleLength} ${pathLength - visibleLength}`
      path.style.strokeDashoffset = `${pathLength}`

      path.animate([{ strokeDashoffset: pathLength }, { strokeDashoffset: 0 }], {
        duration: duration,
        iterations: Number.POSITIVE_INFINITY,
        easing: "linear",
      })
    })

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [svgContent, strokeColor, strokeWidth, dashLength, size, duration])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)")

    const handleResize = () => {
      setResponsiveSize(mediaQuery.matches ? 150 : 170)
    }

    handleResize()
    mediaQuery.addEventListener("change", handleResize)

    return () => mediaQuery.removeEventListener("change", handleResize)
  }, [])

  return <div className={`svg-container ${className}`} ref={containerRef} style={{ width: responsiveSize, height: responsiveSize }}></div>
}
