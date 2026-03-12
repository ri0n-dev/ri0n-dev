"use client";

import { useEffect, useState, type FC } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
    const { setTheme, theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Keep only concrete themes in storage while still using OS theme as the initial source.
        if (mounted && theme === "system" && resolvedTheme) {
            setTheme(resolvedTheme);
        }
    }, [mounted, theme, resolvedTheme, setTheme]);

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" className="size-8 rounded-md" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <Button variant="outline" size="icon" className="size-8 rounded-md" onClick={() => setTheme(isDark ? "light" : "dark")}>
            {isDark ? (
                <Moon
                    className={cn("size-4", props.className)}
                />
            ) : (
                <Sun
                    className={cn("size-4", props.className)}
                />
            )}
        </Button>
    );
};