import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/magicui/blur-fade";
import { WorkItem } from "@/components/ui/work-item";

export function Works() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-25 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <BlurFade delay={1.2}>
                <div className="flex flex-col gap-9">
                    <WorkItem
                        year={2025}
                        title="Card Design"
                        videoSrc="/works/card-design/1.mp4"
                        videoAriaLabel="Card Design video"
                    />

                    <WorkItem
                        year={2025}
                        title="111-theme"
                        href="https://github.com/ri0n-dev/111-theme"
                        description="This is a theme based on #111, and it works with VSCode."
                        imageSrcs={[{ src: "/works/111-theme/1.png", alt: "111-theme - 1" }]}
                    />

                    <WorkItem
                        year={2025}
                        title="Prodfind"
                        href="https://github.com/teamzisty/prodfind"
                        description="Let's find the best products together!"
                        imageSrcs={[{ src: "/works/prodfind/1.png", alt: "prodfind - 1" }]}
                    />

                    <WorkItem
                        year={2025}
                        title="Yajuusenp.ai"
                        href="https://www.yajuusenp.ai/"
                        description="This site was created for people who dream of having a conversation with Yajuu Senpai. There are over 800 users."
                        imageSrcs={[
                            { src: "/works/yajuusenp.ai/1.png", alt: "Yajuusenp.ai - 1" },
                            { src: "/works/yajuusenp.ai/2.png", alt: "Yajuusenp.ai - 2" },
                        ]}
                    />
                </div>
            </BlurFade>
        </section>
    )
}
