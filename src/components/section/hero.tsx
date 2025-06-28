import Image from "next/image"
import { MousePointer } from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Shapes3D from "@/components/3d/hero-shapes";

export default function Hero() {
    return (
        <section id="home" className="flex flex-col relative max-w-300 px-3 w-full min-h-auto lg:min-h-screen overflow-visible mx-auto">
            <div className="flex text-4xl sm:text-5xl lg:text-7xl flex-col mt-28 sm:mt-45 justify-center items-center gap-y-0 sm:gap-y-3">
                <div className="flex items-center gap-4">
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) font-bold">Hi, I&apos;m</h1>
                    <Image src="/assets/icon.webp" alt="Rion" width={100} height={100} className="mb-4 w-20 sm:w-22 md:w-25 h-12 sm:h-14 md:h-16 lg:h-17 aspect-[2/1] object-cover object-[center_33%] rounded-md" />
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) font-bold">Rion</h1>
                </div>


                {/* PC or Mobile */}
                <div className="hidden md:flex items-center gap-4">
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) font-bold">I&apos;m a</h1>
                    <div className="mb-2 w-20 sm:w-22 md:w-25 h-12 sm:h-14 md:h-16 lg:h-17 flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-800/50 to-neutral-900/30">
                        <MousePointer className="text-white/95 w-5 sm:w-8 h-5 sm:h-8" />
                    </div>
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) font-bold">Web Developer</h1>
                </div>

                <div className="flex md:hidden items-center gap-4">
                    <h1 className="text-neutral-100 font-(family-name:--font-pp) font-bold">I&apos;m a</h1>
                    <PointerHighlight pointerClassName="text-neutral-100" rectangleClassName="bg-neutral-900/5 border border-dashed border-neutral-100/60">
                        <h1 className="text-neutral-100 font-(family-name:--font-pp) font-bold">Web Developer</h1>
                    </PointerHighlight>
                </div>
            </div>
            <div className="hidden lg:flex flex-col bg-neutral-50/1 mt-18 sm:mt-25 justify-center items-center rounded-4xl gap-y-3" style={{ backgroundImage: `radial-gradient(at 88% 40%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(0,0%,26%,2%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(0,0%,36%,2%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(0,0%,13%,2%) 0px, transparent 85%)` }}>
                <Shapes3D />
            </div>
        </section>
    );
}