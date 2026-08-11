import NextLink from "next/link"
import type { ComponentProps } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Activity } from "@/components/ui/activity";

function AboutLink({ ...props }: ComponentProps<typeof NextLink>) {
    return <NextLink {...props} className={"hover:text-neutral-900 dark:hover:text-neutral-100 underline transition-colors duration-300"} />;
}

export function About() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-15 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <BlurFade delay={0.6}>
                <p className="text-[15px] md:text-base">
                    I'm a 16 y/o web developer who loves creating polished UIs and turning ideas into products.
                    I also handle video editing, image editing and rendering. Outside of tech, I play basketball for my school team.
                </p>
            </BlurFade>
            <BlurFade delay={0.8}>
                <p className="text-[15px] md:text-base">
                    You can find me on <AboutLink href="https://x.com/ri0n_dev" target="_blank" rel="noopener noreferrer">@ri0n_dev</AboutLink>, <AboutLink href="https://github.com/ri0n-dev" target="_blank" rel="noopener noreferrer">GitHub</AboutLink>, or <AboutLink href="https://discord.com/users/851357394976899116" target="_blank" rel="noopener noreferrer">Discord</AboutLink>, or reach out to me via <AboutLink href="mailto:info@ri0n.dev">email</AboutLink>.
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
