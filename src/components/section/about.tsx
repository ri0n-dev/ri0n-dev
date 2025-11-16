import { BlurFade } from "@/components/magicui/blur-fade";
import { Activity } from "@/components/ui/activity";

export function About() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-15 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <BlurFade delay={0.6}>
                <p className="text-[15px] md:text-base">
                    I&apos;m a <span className="text-neutral-900 dark:text-neutral-100">developer</span> who enjoys{" "}
                    <span className="text-neutral-900 dark:text-neutral-50">web development</span> and{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">design</span>.
                </p>
            </BlurFade>
            <BlurFade delay={0.8}>
                <p className="text-[15px] md:text-base">
                    I live in <span className="text-neutral-900 dark:text-neutral-100">Sapporo, Japan</span>. In addition to
                    development, I also handle <span className="text-neutral-900 dark:text-neutral-100">video editing</span>, <span className="text-neutral-900 dark:text-neutral-100">image editing</span> and <span className="text-neutral-900 dark:text-neutral-100">rendering</span>.
                    My YouTube channel has over{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">3,000 subscribers</span> and a total of{" "}
                    <span className="text-neutral-900 dark:text-neutral-100">1.3 million views</span>.
                </p>
            </BlurFade>
            <BlurFade delay={1}>
                <p className="text-[15px] md:text-base">
                    I&apos;m listening to <Activity />
                </p>
            </BlurFade>
        </section>
    )
}
