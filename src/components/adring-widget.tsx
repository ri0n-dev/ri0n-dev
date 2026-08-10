"use client";

import { useEffect, useRef } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

function GetAdringWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const script = document.createElement("script");
        script.src = "https://adring.net/widget/v1.js";
        script.async = true;
        script.dataset.siteId = "467acf64-9c5e-45a0-813d-1a449667b7fa";
        script.dataset.variant = "native";
        container.append(script);
        return () => container.replaceChildren();
    }, []);

    return <div ref={containerRef} />;
}

type AdringWidgetProps = {
    delay?: number;
};

export function AdringWidget({ delay = 0 }: AdringWidgetProps) {
    return (
        <BlurFade delay={delay}>
            <div className="w-full mt-9">
                <p className="text-[13px] flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-base text-left">
                    <span className="text-neutral-500 mr-1">Sponsored</span>
                </p>
                <div className="mt-3 p-2 md:p-4 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full">
                    <GetAdringWidget />
                </div>
            </div>
        </BlurFade>
    )
}