import { ArrowUpRight } from "lucide-react";
import { WorkMedia, MediaItem } from "@/components/ui/work-media";
import { BlurFade } from "@/components/magicui/blur-fade";
import { RedirectDialog } from "@/components/ui/redirect-dialog";

type WorkItemProps = {
    year: string | number;
    title: string;
    delay: number;
    href?: string;
    description?: string;
    media?: MediaItem[];
    width?: number;
    height?: number;
};

export function WorkItem({ year, title, href, description, delay, media, width, height }: WorkItemProps) {
    const header = (
        <>
            <p className="text-[13px] flex items-center gap-1">
                <span className="text-neutral-400 dark:text-neutral-600 mr-1">{year}</span>
                {title}
                {href ? <ArrowUpRight size={14} className="inline-block" /> : null}
            </p>
            {description ? <p className="text-sm mt-0.5">{description}</p> : null}
        </>
    );

    const content = (
        <BlurFade delay={delay}>
            <div className="w-full">
                {header}
                <WorkMedia media={media} width={width} height={height} />
            </div>
        </BlurFade>
    );

    if (href) {
        return (
            <RedirectDialog href={href}>
                {content}
            </RedirectDialog>
        );
    }

    return content;
}

export type { WorkItemProps };
