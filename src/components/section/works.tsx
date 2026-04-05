import { WorkItem } from "@/components/ui/work-item";

export function Works() {
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
                    title="Personal Website"
                    description="This is my personal website, built with Next.js and Tailwind CSS."
                    imageSrc={[{ src: '/works/personal-website/1.png', darkSrc: '/works/personal-website/1-dark.png', alt: "Personal Website - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={1.6}
                    title="Card Design"
                    fallback='/works/card-design/1.fallback.png'
                    darkFallback='/works/card-design/1-dark.fallback.png'
                    videoSrc='/works/card-design/1.mp4'
                    darkVideoSrc='/works/card-design/1-dark.mp4'
                    videoAriaLabel="Card Design video"
                />

                <WorkItem
                    year={2025}
                    delay={1.8}
                    title="Uni School"
                    fallback="/works/uni-school/1.fallback.png"
                    description="This is a homepage I created for a student team, commissioned for 5k yen."
                    videoSrc='/works/uni-school/1.mp4'
                    videoAriaLabel="Uni School video"
                />

                <WorkItem
                    year={2025}
                    delay={2.0}
                    title="111-theme"
                    href="https://github.com/ri0n-dev/111-theme"
                    description="This is a theme based on #111, and it works with VSCode. Downloaded by over 600 times!"
                    imageSrc={[{ src: "/works/111-theme/1.png", alt: "111-theme - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={2.2}
                    title="Prodfind"
                    description="This is a project I worked on with Zisty member rai, and I was in chrage of the frontend. Let's find the best products together!"
                    imageSrc={[{ src: '/works/prodfind/1.png', darkSrc: '/works/prodfind/1-dark.png', alt: "prodfind - 1" }]}
                />

                <WorkItem
                    year={2025}
                    delay={2.4}
                    title="Zisty Website"
                    imageSrc={[
                        { src: "/works/zisty-website/1.png", alt: "Zisty Website - 1" },
                    ]}
                />
            </div>
        </section>
    )
}
