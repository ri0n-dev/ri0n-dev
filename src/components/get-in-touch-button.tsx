"use client";

import { useState } from "react";
import Link from "next/link"
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export function GetInTouchButton() {
    const [isShimmering, setIsShimmering] = useState(false);

    return (
        <Button
            asChild
            onMouseEnter={() => setIsShimmering(true)}
            onAnimationEnd={(event) => {
                if (event.animationName === "shimmer") {
                    setIsShimmering(false);
                }
            }}
            className={`
        shimmer-button
        ${isShimmering ? "shimmering" : ""}
        text-xs rounded-md h-8 px-3 sm:px-3.5
        shadow-[0_2px_0_rgba(0,0,0,0.5), 0_6px_14px_rgba(0,0,0,0.55)]
        transition-all duration-300
        `}
        >
            <Link href="https://x.com/ri0n_dev" target="_blank" rel="noopener noreferrer">
                <Send className="hidden sm:block" />
                <span>Get in touch</span>
            </Link>
        </Button>
    )
}