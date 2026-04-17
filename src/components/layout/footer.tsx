import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="flex items-center justify-between w-full mb-4 mt-20 text-center text-sm md:text-sm text-neutral-500">
            <p className="text-left">© {new Date().getFullYear()}</p>
            <div className="flex gap-3">
                <Link href="https://x.com/ri0n_dev" target="_blank" rel="noopener noreferrer">
                    <p className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-50 transform duration-300">X <ArrowUpRight size={14} /></p>
                </Link>
                <Link href="https://discord.com/users/851357394976899116" target="_blank" rel="noopener noreferrer">
                    <p className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-50 transform duration-300">Discord <ArrowUpRight size={14} /></p>
                </Link>
                <Link href="https://github.com/ri0n-dev" target="_blank" rel="noopener noreferrer">
                    <p className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-50 transform duration-300">Github <ArrowUpRight size={14} /></p>
                </Link>
            </div>
        </footer>
    )
}