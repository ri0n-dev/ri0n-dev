import { CardGrid } from "@/components/ui/card-grid"
import { BlurFade } from "@/components/magicui/blur-fade";

export function About() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-15 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <BlurFade delay={0.6}>
                <p>
                    I&apos;m a <span className="text-neutral-900 dark:text-neutral-100">developer</span> who enjoys{" "}
                    <span className="text-neutral-900 dark:text-neutral-50">web development</span> and{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">design</span>.
                </p>
            </BlurFade>
            <BlurFade delay={0.8}>
                <p>
                    I live in <span className="text-neutral-900 dark:text-neutral-100">Sapporo, Japan</span>. In addition to
                    development, I also create <span className="text-neutral-900 dark:text-neutral-100">videos</span> and work as a{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">malware tester</span>. My YouTube channel has over{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">3,000 subscribers</span> and a total of{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">1.3 million views</span>.
                </p>
            </BlurFade>
            <BlurFade delay={1}>
                <p>
                    I sometimes play Tetris for fun. Looking forward to{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">connecting</span> with you! :)
                </p>
            </BlurFade>

            <CardGrid />
        </section>
    )
}
