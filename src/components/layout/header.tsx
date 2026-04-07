import Link from "next/link"
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

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
                    <Link href="https://x.com/ri0n_dev" target="_blank" rel="noopener noreferrer">
                        <p className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-50 transform duration-300">X <ArrowUpRight size={14} /></p>
                    </Link>
                    <Link href="https://discord.com/users/851357394976899116" target="_blank" rel="noopener noreferrer">
                        <p className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-50 transform duration-300">Discord <ArrowUpRight size={14} /></p>
                    </Link>
                    <Link href="https://github.com/ri0n-dev" target="_blank" rel="noopener noreferrer">
                        <p className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-50 transform duration-300">Github <ArrowUpRight size={14} /></p>
                    </Link>

                    {/*
                    <Button
                        asChild
                        size="sm"
                        className="
                        shimmer-button
                        text-xs px-3.5 rounded-md
                        shadow-[0_2px_0_rgba(0,0,0,0.5), 0_6px_14px_rgba(0,0,0,0.55)]
                        transition-all duration-300 
                        "
                    >
                        <Link href="mailto:info@ri0n.dev" target="_blank" rel="noopener noreferrer">
                            <span>Get in touch</span>
                        </Link>
                    </Button>
                    */}
                </div>
            </div>
        </header>
    )
}
