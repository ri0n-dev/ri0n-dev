"use client";

import { WorkItem } from "@/components/ui/work-item";
import { useTheme } from "next-themes";

export function Works() {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";

    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-25 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <div className="flex flex-col gap-9">
                <WorkItem
                    year={2025}
                    delay={1.2}
                    title="Rainbow Button"
                    href="https://uiverse.io/ri0n-dev/sour-wasp-14"
                    description="This is a button created for submitting to UIverse&apos;s &quot;Button Mastery 12&quot; challenge."
                    videoSrc='/works/rainbow-button/1.mp4'
                    videoAriaLabel="Rainbow Button video"
                />

                <WorkItem
                    year={2025}
                    delay={1.4}
                    title="Card Design"
                    fallback={isDarkTheme ? '/works/card-design/1-dark.fallback.png' : '/works/card-design/1.fallback.png'}
                    videoSrc={isDarkTheme ? '/works/card-design/1-dark.mp4' : '/works/card-design/1.mp4'}
                    videoAriaLabel="Card Design video"
                />

                <WorkItem
                    year={2025}
                    delay={1.6}
                    title="Uni School"
                    fallback="/works/uni-school/1.fallback.png"
                    description="This is a homepage I created for a student team, commissioned for 5k yen."
                    videoSrc='/works/uni-school/1.mp4'
                    videoAriaLabel="Uni School video"
                />

                <WorkItem
                    year={2025}
                    delay={1.8}
                    title="111-theme"
                    href="https://github.com/ri0n-dev/111-theme"
                    description="This is a theme based on #111, and it works with VSCode. Downloaded by over 400 times!"
                    imageSrc={[{ src: "/works/111-theme/1.png", alt: "111-theme - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={2.0}
                    title="Prodfind"
                    href="https://github.com/teamzisty/prodfind"
                    description="This is a project I worked on with Zisty member rai, and I was in chrage of the frontend. Let's find the best products together!"
                    imageSrc={[{ src: isDarkTheme ? '/works/prodfind/1-dark.png' : '/works/prodfind/1.png', alt: "prodfind - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={2.2}
                    title="Yajuusenp.ai"
                    href="https://www.yajuusenp.ai/"
                    description="This site was created for people who dream of having a conversation with Yajuu Senpai. Got over 1,000 users."
                    imageSrc={[
                        { src: "/works/yajuusenp.ai/1.png", alt: "Yajuusenp.ai - 1" },
                        { src: "/works/yajuusenp.ai/2.png", alt: "Yajuusenp.ai - 2" },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={2.4}
                    title="Zisty Website"
                    href="https://www.zisty.net/"
                    imageSrc={[
                        { src: "/works/zisty-website/1.png", alt: "Zisty Website - 1" },
                    ]}
                />
            </div>
        </section>
    )
}
