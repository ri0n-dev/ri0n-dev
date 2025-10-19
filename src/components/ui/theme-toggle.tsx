"use client";

import type { FC } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
    const { setTheme, theme } = useTheme();
    return (
        <Button variant="outline" size="icon" className="size-8 rounded-md" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
                <Moon
                    className={cn("size-4", props.className)}
                    onClick={() => setTheme("light")}
                />
            ) : (
                <Sun
                    className={cn("size-4", props.className)}
                    onClick={() => setTheme("dark")}
                />
            )}
        </Button>
    );
};