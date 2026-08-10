import { WorkItem, type WorkItemProps } from "@/components/ui/work-item";

const INITIAL_DELAY = 1.2;
const DELAY_STEP = 0.2;

const works = [
    {
        year: 2026,
        title: "Tilt Card",
        description: "3D tilt card with hover effects and front-to-back flipping.",
        media: [
            { type: "video", src: "https://cdn.ri0n.dev/tilt-card.mp4" },
        ],
    },
    {
        year: 2026,
        title: "Hex UI",
        href: "https://x.com/ri0n_dev/status/2081726372192583829",
        description: "Check out these beautiful and sophisticated UI blocks and templates.",
        media: [
            {
                type: "image",
                src: "https://cdn.ri0n.dev/hexui.png",
                darkSrc: "https://cdn.ri0n.dev/hexui.dark.png",
                alt: "hexui screenshot",
            },
            { type: "video", src: "https://cdn.ri0n.dev/introducing-hexui.mp4" },
        ],
    },
    {
        year: 2026,
        title: "Personal Website",
        description: "This is my personal website, built with Next.js and Tailwind CSS.",
        media: [
            { type: "video", src: "https://cdn.ri0n.dev/personal-website.mp4" },
        ],
    },
    {
        year: 2025,
        title: "Rainbow Button",
        href: "https://uiverse.io/ri0n-dev/sour-wasp-14",
        description: "This is a button created for submitting to UIverse's \"Button Mastery 12\" challenge.",
        media: [
            { type: "video", src: "https://cdn.ri0n.dev/rainbow-button.mp4" },
        ],
    },
    {
        year: 2025,
        title: "Card Design",
        description: "A simple yet stylish card design.",
        media: [
            {
                type: "video",
                src: "https://cdn.ri0n.dev/card-design.mp4",
                darkSrc: "https://cdn.ri0n.dev/card-design.dark.mp4",
            },
        ],
    },
    {
        year: 2025,
        title: "Uni School",
        description: "This is a homepage I created for a student team, commissioned for 5k yen.",
        media: [
            { type: "video", src: "https://cdn.ri0n.dev/unischool.mp4" },
        ],
    },
    {
        year: 2025,
        title: "111-theme",
        href: "https://github.com/ri0n-dev/111-theme",
        description: "This is a theme based on #111, and it works with VSCode. Downloaded by over 600 times!",
        media: [
            {
                type: "image",
                src: "https://cdn.ri0n.dev/111-theme.png",
                alt: "111-theme screenshot",
            },
        ],
    },
    {
        year: 2025,
        title: "Prodfind",
        description: "This is a project I worked on with Zisty member rai, and I was in chrage of the frontend. Let's find the best products together!",
        media: [
            {
                type: "image",
                src: "https://cdn.ri0n.dev/prodfind.png",
                darkSrc: "https://cdn.ri0n.dev/prodfind.dark.png",
                alt: "prodfind screenshot",
            },
        ],
    },
    {
        year: 2025,
        title: "Personal Website Old",
        media: [
            { type: "video", src: "https://cdn.ri0n.dev/personal-website-old.mp4" },
        ],
    },
    {
        year: 2025,
        title: "Zisty Website",
        media: [
            {
                type: "image",
                src: "https://cdn.ri0n.dev/zisty-website.png",
                alt: "Zisty Website screenshot",
            },
        ],
    },
] satisfies Omit<WorkItemProps, "delay">[];

const BLUR_FADE_DURATION = 0.4;

export const WORKS_ANIMATION_END_DELAY =
    INITIAL_DELAY + (works.length - 1) * DELAY_STEP + BLUR_FADE_DURATION;

export function Works() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-25 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <div className="flex flex-col gap-9">
                {works.map((work, index) => (
                    <WorkItem
                        key={`${work.year}-${work.title}`}
                        {...work}
                        delay={INITIAL_DELAY + index * DELAY_STEP}
                    />
                ))}
            </div>
        </section>
    );
}
