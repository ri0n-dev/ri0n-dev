import Image from "next/image"
import Shapes3D from "@/components/3d/hero-shapes";
import { MousePointer } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="flex flex-col relative max-w-300 w-full min-h-screen overflow-hidden mx-auto">
            <div className="flex flex-col mt-45 justify-center items-center gap-y-3">
                <div className="flex items-center gap-4">
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) text-7xl font-bold">Hi, I&apos;m</h1>
                    <Image src="/assets/icon.webp" alt="Rion" width={100} height={100} className="mb-4 w-25 h-17 aspect-[2/1] object-cover object-[center_33%] rounded-md" />
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) text-7xl font-bold">Rion</h1>
                </div>

                <div className="flex items-center gap-4">
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) text-7xl font-bold">I&apos;m a</h1>
                    <div className="mb-2 w-25 h-17 flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-800/50 to-neutral-900/30">
                        <MousePointer className="text-white/95 w-8 h-8" />
                    </div>
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) text-7xl font-bold">Web Developer</h1>
                </div>
            </div>
            <div className="hidden sm:flex flex-col bg-neutral-50/1 mt-25 justify-center items-center rounded-4xl gap-y-3" style={{ backgroundImage: `radial-gradient(at 88% 40%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(0,0%,26%,2%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(0,0%,36%,2%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(0,0%,13%,2%) 0px, transparent 85%)` }}>
                <Shapes3D />
            </div>
        </section>
    );
}