"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import NextLink from "next/link"
import type { ComponentProps } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Activity } from "@/components/ui/activity";
import { cn } from "@/lib/utils";

function AboutLink({ profile, className, ...props }: ComponentProps<typeof NextLink> & {
    profile?: {
        name: string;
        username: string;
        avatarUrl: string;
        tilt: string;
    };
}) {
    const link = <NextLink {...props} className={cn("hover:text-neutral-900 dark:hover:text-neutral-100 underline transition-colors duration-300 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring", className)} />;

    if (!profile) return link;

    return (
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{link}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        side="top"
                        sideOffset={10}
                        collisionPadding={16}
                        className={cn("z-50 w-60 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-white/10 p-4 text-popover-foreground shadow-lg backdrop-blur-xl backdrop-saturate-150 dark:bg-neutral-900/10 origin-[var(--radix-tooltip-content-transform-origin)] data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none", profile.tilt)}
                    >
                        <span className="flex items-center gap-3">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                                <img
                                    src={profile.avatarUrl}
                                    alt=""
                                    aria-hidden="true"
                                    className="size-full rounded-full object-cover"
                                />
                            </span>
                            <span className="flex flex-col gap-0.5">
                                <span className="text-sm font-semibold">{profile.name}</span>
                                <span className="text-xs text-muted-foreground">{profile.username}</span>
                            </span>
                        </span>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export function About() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-15 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <BlurFade delay={0.6}>
                <p className="text-[15px] md:text-base">
                    I&apos;m a 16 y/o web developer who loves creating polished UIs and turning ideas into products.
                    I also handle video editing, image editing and rendering. Outside of tech, I play basketball for my school team.
                </p>
            </BlurFade>
            <BlurFade delay={0.8}>
                <p className="text-[15px] md:text-base">
                    You can find me on <AboutLink
                        href="https://x.com/ri0n_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        profile={{ name: "X", username: "@ri0n_dev", avatarUrl: "https://pbs.twimg.com/profile_images/2066947153755623424/drXc6MZG_400x400.jpg", tilt: "rotate-[-2deg]" }}
                    >@ri0n_dev</AboutLink>
                    , <AboutLink
                        href="https://github.com/ri0n-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        profile={{ name: "GitHub", username: "ri0n-dev", avatarUrl: "https://avatars.githubusercontent.com/u/114809507?v=4", tilt: "rotate-[1.5deg]" }}
                    >GitHub</AboutLink>
                    , or <AboutLink
                        href="https://discord.com/users/851357394976899116"
                        target="_blank"
                        rel="noopener noreferrer"
                        profile={{ name: "Discord", username: "metaorbit0", avatarUrl: "https://cdn.discordapp.com/avatars/851357394976899116/1d3c3f8d2858ad259f54bf69a058842d.webp?size=1024", tilt: "rotate-[-1deg]" }}
                    >Discord</AboutLink>, or reach out to me via <AboutLink href="mailto:info@ri0n.dev">email</AboutLink>.
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
