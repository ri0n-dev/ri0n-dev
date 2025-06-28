import Link from "next/link"
import { House, UserRound, BriefcaseBusiness, Send } from "lucide-react";

export default function Header() {
    return (
        <>
            <div className="hidden sm:flex fixed font-inter gap-x-2 top-0 w-full justify-center z-50">
                <div className="mt-4 flex items-center gap-4 px-6 py-2 text-neutral-100 bg-neutral-900/1 backdrop-blur-md rounded-full border border-neutral-800 shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)]">
                    <Link href="/#home" className="flex items-center gap-x-2"><House size={16} /> Home</Link>
                    <Link href="/#about" className="flex items-center gap-x-2"><UserRound size={16} /> About</Link>
                    <Link href="/#works" className="flex items-center gap-x-2"><BriefcaseBusiness size={16} /> Works</Link>
                </div>
                <div className="mt-4 items-center gap-4 px-6 py-2 text-neutral-100 bg-neutral-900/5 backdrop-blur-md rounded-full border border-neutral-800 shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)]">
                    <Link href="mailto:hi@ri0n.dev" className="flex items-center gap-x-2 font-medium"><Send size={16} /> Contact</Link>
                </div>
            </div>

            <div className="flex sm:hidden fixed font-inter gap-x-2 top-0 w-full justify-center px-3 z-50">
                <div className="mt-4 flex text-sm items-center gap-4 text-neutral-100 bg-neutral-900/1 backdrop-blur-md rounded-full border border-neutral-800 shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)]">
                    <Link href="/#home" className="flex ml-6 items-center gap-x-2"><House size={14} /> Home</Link>
                    <div className="items-center gap-4 px-6 py-2.5 text-neutral-100 bg-neutral-900/5 backdrop-blur-md rounded-full border border-neutral-800  shadow-[0_0_30px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.05)]">
                        <Link href="mailto:hi@ri0n.dev" className="flex items-center gap-x-2 font-medium"><Send size={14} /> Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
