import Link from "next/link"
import { GetInTouchButton } from "./get-in-touch-button";

export function Header() {
    return (
        <header className="sticky w-full py-5">
            <div className="flex h-16 w-full items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            <span className="text-neutral-900 dark:text-neutral-50">Rion</span><br />Web Designer
                        </p>
                    </Link>
                </div>
                <div className="flex items-center space-x-5">
                    <GetInTouchButton />
                </div>
            </div>
        </header>
    )
}
