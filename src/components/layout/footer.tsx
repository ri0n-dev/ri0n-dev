import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
    return (
        <footer className="relative bottom-0 max-w-300 w-full pt-50 z-60 font-inter mx-auto">
            <div className="relative w-full">
                <Image src={"/assets/ri0n.dev.webp"} alt="Rion" width={1920} height={300} className="w-full opacity-80 object-contain" />
            </div>
            <div className="flex justify-between mt-2 pb-6">
                <p className="text-neutral-400 text-sm mb-2">Rion&apos;s Personal Website</p>
                <div className="flex gap-x-2">
                    <Link href="/tos" className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">ToS</Link>
                    <Link href="/privacy" className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">Privacy Policy</Link>
                    <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Rion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
