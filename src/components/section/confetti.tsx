"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Confetti() {
    useEffect(() => {
        const end = Date.now() + 3 * 1000;
        const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    }, []);

    return null;
}