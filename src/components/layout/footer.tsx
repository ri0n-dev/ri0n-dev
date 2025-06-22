import Image from "next/image"

export default function Footer() {
    return (
        <div className="relative bottom-0 max-w-300 w-full pt-50 z-50 font-inter mx-auto">
            <Image src={"/assets/ri0n.dev.webp"} alt="Rion" width={1920} height={300} className="opacity-80 w-full h-full object-contain" />
            <div className="flex justify-between mt-2 pb-6">
                <p className="text-neutral-400 text-sm">Rion's Personal Website</p>
                <div className="flex gap-x-2">
                    <a href="/tos">
                        <p className="text-neutral-400 text-sm">ToS</p>
                    </a>
                    <a href="/privacy">
                        <p className="text-neutral-400 text-sm">Privacy Policy</p>
                    </a>
                    <p className="text-neutral-400 text-sm">© Rion. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
