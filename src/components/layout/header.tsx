import Link from "next/link"
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export function Header() {
    return (
        <header className="sticky w-full py-5">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            <span className="text-neutral-900 dark:text-neutral-50">Rion</span><br />Web Designer
                        </p>
                    </Link>
                </div>
                <div className="flex items-center space-x-5">
                    <Button
                        asChild
                        size="icon"
                        className="
                        shimmer-button
                        text-xs rounded-md size-8 sm:size-9 sm:h-8 sm:w-auto sm:px-3.5
                        shadow-[0_2px_0_rgba(0,0,0,0.5), 0_6px_14px_rgba(0,0,0,0.55)]
                        transition-all duration-300
                        "
                    >
                        <Link href="https://x.com/ri0n_dev" target="_blank" rel="noopener noreferrer">
                            <Send className="sm:hidden" />
                            <span className="hidden sm:block">Get in touch</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
