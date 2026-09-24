import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { RedirectDialog } from "@/components/ui/redirect-dialog";

const INITIAL_DELAY = 1.2;
const DELAY_STEP = 0.2;

const projects = [
    { name: "Hex UI", href: "https://hexui.sh/" },
    { name: "111-theme", href: "https://github.com/ri0n-dev/111-theme" },
];

export function Projects() {
    return (
        <section className="flex flex-col gap-y-1 justify-center mt-10 text-sm text-neutral-500 dark:text-neutral-400 text-left">
            <BlurFade delay={INITIAL_DELAY}>
                <p className="font-mono text-xs">PROJECTS</p>
            </BlurFade>
            <ul className="flex flex-col">
                {projects.map(({ name, href }, index) => {
                    const content = (
                        <>
                            <span className="transition-colors group-hover:text-neutral-900 dark:group-hover:text-neutral-50">{name}</span>
                            <span aria-hidden="true" className="mx-2 flex-1 border-b border-dotted border-current [border-image:repeating-linear-gradient(to_right,currentColor_0_1px,transparent_1px_6px)_1] opacity-50" />
                            <ArrowUpRight size={16} aria-hidden="true" className="shrink-0" />
                        </>
                    );

                    return (
                        <li key={name}>
                            <BlurFade delay={INITIAL_DELAY + (index + 1) * DELAY_STEP}>
                                <RedirectDialog href={href}>
                                    <span className="group flex w-full items-center py-2">{content}</span>
                                </RedirectDialog>
                            </BlurFade>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}
