import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface DockProps {
    items: DockItem[]
    children?: ReactNode
}

interface DockItem {
    icon: React.ElementType | string
    label: string
}

export function Dock({ items, children }: DockProps) {
    return (
        <div className={cn("flex items-center gap-2 p-3 ml-24 bg-neutral-50 dark:bg-neutral-950/10 backdrop-blur-xs rounded-2xl rounded-r-none border dark:border-neutral-800/50 shadow-[0_16px_8px_rgba(0,_0,_0,_0.008),_0_12px_6px_rgba(0,_0,_0,_0.015),_0_4px_4px_rgba(0,_0,_0,_0.025),_0_1.5px_3px_rgba(0,_0,_0,_0.03),_0_0_0_1px_rgba(0,_0,_0,_0.03),_inset_0_1px_2px_rgba(255,_255,_255,_0.7)] dark:shadow-[0_16px_8px_rgba(31,_31,_31,_0.01),_0_12px_6px_rgba(31,_31,_31,_0.04),_0_4px_4px_rgba(31,_31,_31,_0.07),_0_1.5px_3px_rgba(31,_31,_31,_0.08),_0_0_0_1px_#0f0f0f,_inset_0_1px_2px_hsla(0,_0%,_100%,_0.12)]")}>
            {items.map((item, index) => (
                <button key={index} className="group relative p-3 rounded-xl bg-white/5 shadow-[0_16px_8px_rgba(0,_0,_0,_0.01),_0_12px_6px_rgba(0,_0,_0,_0.03),_0_4px_4px_rgba(0,_0,_0,_0.05),_0_1.5px_3px_rgba(0,_0,_0,_0.06),_0_0_0_1px_rgba(0,_0,_0,_0.05),_inset_0_1px_2px_rgba(255,_255,_255,_0.95)] dark:shadow-[0_16px_8px_rgba(31,_31,_31,_0.01),_0_12px_6px_rgba(31,_31,_31,_0.04),_0_4px_4px_rgba(31,_31,_31,_0.07),_0_1.5px_3px_rgba(31,_31,_31,_0.08),_0_0_0_1px_#0f0f0f,_inset_0_1px_2px_hsla(0,_0%,_100%,_0.12)]" title={item.label}>
                    <item.icon className="w-6 h-6 text-black/80 dark:text-white/80" />
                </button>
            ))}
            {children}
        </div>
    )
}
