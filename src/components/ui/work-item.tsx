import { ArrowUpRight } from "lucide-react";
import { WorkMedia, WorkMediaProps } from "@/components/ui/work-media";
import { BlurFade } from "@/components/magicui/blur-fade";
import { RedirectDialog } from "@/components/ui/redirect-dialog";

type WorkItemProps = WorkMediaProps & {
    year: string | number;
    title: string;
    delay: number;
    href?: string;
    description?: string;
};

export function WorkItem({ year, title, href, description, delay, ...media }: WorkItemProps) {
    const Header = (
        <>
            <p className="text-[13px] flex items-center gap-1">
                <span className="text-neutral-400 dark:text-neutral-600 mr-1">{year}</span>
                {title}
                {href ? <ArrowUpRight size={14} className="inline-block" /> : null}
            </p>
            {description ? <p className="text-sm mt-0.5">{description}</p> : null}
        </>
    );

    const Content = (
        <BlurFade delay={delay}>
            <div className="w-full">
                {Header}
                <WorkMedia {...media} />
            </div>
        </BlurFade>
    );

    if (href) {
        return (
            <>
                <RedirectDialog href={href}>
                    {Content}
                </RedirectDialog>
            </>
        );
    }

    return Content;
}

export type { WorkItemProps };
