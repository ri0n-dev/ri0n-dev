import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex items-center justify-between w-full mb-4 mt-20 text-center text-xs md:text-sm text-neutral-400 dark:text-neutral-600">
            <p className="text-left">© {new Date().getFullYear()}</p>
            <div className="flex gap-3">
                <Link href="/home" className="hover:underline">/home</Link>
                <Link href="/privacy" className="hover:underline">/privacy</Link>
                <Link href="/tos" className="hover:underline">/tos</Link>
            </div>
        </footer>
    )
}