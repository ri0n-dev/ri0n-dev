import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ArrowUpRight } from "lucide-react"

export function Works() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-25 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <BlurFade delay={1.2}>
                <div className="flex flex-col gap-9">
                    <div className="w-full">
                        <p className="text-[13px] flex items-center gap-1"><span className="text-neutral-200 dark:text-neutral-600 mr-2">2025</span> Card Design</p>
                        <video
                            className="mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full  shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label="Card Design video"
                        >
                            <source src="/works/card-design/1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <Link href="https://github.com/ri0n-dev/111-theme" target="_blank" rel="noopener noreferrer">
                        <div className="w-full">
                            <p className="text-[13px] flex items-center gap-1"><span className="text-neutral-200 dark:text-neutral-600 mr-2">2025</span> 111-theme<ArrowUpRight size={14} className="inline-block" /></p>
                            <p className="text-sm mt-1">This is a theme based on #111, and it works with VSCode.</p>
                            <Image src={"/works/111-theme/1.png"} alt="111-theme - 1" width={600} height={400} className="mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full  shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
                        </div>
                    </Link>

                    <Link href="https://github.com/teamzisty/prodfind" target="_blank" rel="noopener noreferrer">
                        <div className="w-full">
                            <p className="text-[13px] flex items-center gap-1"><span className="text-neutral-200 dark:text-neutral-600 mr-2">2025</span> Prodfind<ArrowUpRight size={14} className="inline-block" /></p>
                            <p className="text-sm mt-1">Let's find the best products together!</p>
                            <Image src={"/works/prodfind/1.png"} alt="prodfind - 1" width={600} height={400} className="mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full  shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
                        </div>
                    </Link>

                    <Link href="https://www.yajuusenp.ai/" target="_blank" rel="noopener noreferrer">
                        <div className="w-full">
                            <p className="text-[13px] flex items-center gap-1"><span className="text-neutral-200 dark:text-neutral-600 mr-2">2025</span> Yajuusenp.ai<ArrowUpRight size={14} className="inline-block" /></p>
                            <p className="text-sm mt-1">This site was created for people who dream of having a conversation with Yajuu Senpai. There are over 800 users.</p>
                            <div className="flex flex-col">
                                <Image src={"/works/yajuusenp.ai/3.png"} alt="Yajuusenp.ai - 1" width={600} height={400} className="mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full  shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
                                <Image src={"/works/yajuusenp.ai/2.png"} alt="Yajuusenp.ai - 1" width={600} height={400} className="mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full  shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
                            </div>
                        </div>
                    </Link>
                </div>
            </BlurFade>
        </section>
    )
}
