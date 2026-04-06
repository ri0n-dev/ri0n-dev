import { WorkItem } from "@/components/ui/work-item";

export function Works() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-25 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <div className="flex flex-col gap-9">
                <WorkItem
                    year={2025}
                    delay={1.2}
                    title="Personal Website"
                    description="This is my personal website, built with Next.js and Tailwind CSS."
                    media={[
                        { type: 'video', src: 'https://cdn.ri0n.dev/personal-website.mp4' },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={1.4}
                    title="Rainbow Button"
                    href="https://uiverse.io/ri0n-dev/sour-wasp-14"
                    description="This is a button created for submitting to UIverse&apos;s &quot;Button Mastery 12&quot; challenge."
                    media={[
                        { type: 'video', src: 'https://cdn.ri0n.dev/rainbow-button.mp4', ariaLabel: "Rainbow Button video" },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={1.6}
                    title="Card Design"
                    description="A simple yet stylish card design."
                    media={[
                        { type: 'video', src: 'https://cdn.ri0n.dev/card-design.mp4', darkSrc: 'https://cdn.ri0n.dev/card-design.dark.mp4', ariaLabel: "Card Design video" },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={1.8}
                    title="Uni School"
                    description="This is a homepage I created for a student team, commissioned for 5k yen."
                    media={[
                        { type: 'video', src: 'https://cdn.ri0n.dev/unischool.mp4', ariaLabel: "Uni School video" },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={2.0}
                    title="111-theme"
                    href="https://github.com/ri0n-dev/111-theme"
                    description="This is a theme based on #111, and it works with VSCode. Downloaded by over 600 times!"
                    media={[
                        { type: 'image', src: "https://cdn.ri0n.dev/111-theme.png", alt: "111-theme screenshot" },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={2.2}
                    title="Prodfind"
                    description="This is a project I worked on with Zisty member rai, and I was in chrage of the frontend. Let's find the best products together!"
                    media={[
                        { type: 'image', src: 'https://cdn.ri0n.dev/prodfind.png', darkSrc: 'https://cdn.ri0n.dev/prodfind.dark.png', alt: "prodfind screenshot" },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={2.4}
                    title="Personal Website Old"
                    media={[
                        { type: 'video', src: 'https://cdn.ri0n.dev/personal-website-old.mp4', ariaLabel: "Personal Website Old video" },
                    ]}
                />

                <WorkItem
                    year={2025}
                    delay={2.6}
                    title="Zisty Website"
                    media={[
                        { type: 'image', src: "https://cdn.ri0n.dev/zisty-website.png", alt: "Zisty Website screenshot" },
                    ]}
                />
            </div>
        </section>
    )
}
