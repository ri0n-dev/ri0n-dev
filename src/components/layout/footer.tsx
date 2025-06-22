import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
    return (
        <footer className="relative bottom-0 w-full pt-12 z-50 font-inter mx-auto">
            <div className="relative w-full h-16">
                <Image  src={"/assets/ri0n.dev.webp"} alt="Rion" fill sizes="100vw" className="opacity-80 object-contain" priority={false}/>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-2 pb-6 px-4">
                <p className="text-neutral-400 text-sm mb-2 md:mb-0">Rion&apos;s Personal Website</p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <Link href="/tos" className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">ToS</Link>
                    <Link href="/privacy" className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors">Privacy Policy</Link>
                    <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Rion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
