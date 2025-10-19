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
                    title="Card Design"
                    videoSrc={isDarkTheme ? '/works/card-design/1-dark.mp4' : '/works/card-design/1.mp4'}
                    videoAriaLabel="Card Design video"
                />

                <WorkItem
                    year={2025}
                    delay={1.4}
                    title="Uni School"
                    description="This is a homepage I created for a student team, commissioned for 5k yen."
                    imageSrcs={[{ src: "/works/uni-school/1.png", alt: "uni-school - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={1.6}
                    title="111-theme"
                    href="https://github.com/ri0n-dev/111-theme"
                    description="This is a theme based on #111, and it works with VSCode."
                    imageSrcs={[{ src: "/works/111-theme/1.png", alt: "111-theme - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={1.8}
                    title="Prodfind"
                    href="https://github.com/teamzisty/prodfind"
                    description="Let's find the best products together!"
                    imageSrcs={[{ src: isDarkTheme ? '/works/prodfind/1-dark.png' : '/works/prodfind/1.png', alt: "prodfind - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={2}
                    title="Yajuusenp.ai"
                    href="https://www.yajuusenp.ai/"
                    description="This site was created for people who dream of having a conversation with Yajuu Senpai. There are over 800 users."
                    imageSrcs={[
                        { src: "/works/yajuusenp.ai/1.png", alt: "Yajuusenp.ai - 1" },
                        { src: "/works/yajuusenp.ai/2.png", alt: "Yajuusenp.ai - 2" },
                    ]}
                />
            </div>
        </section>
    )
}
