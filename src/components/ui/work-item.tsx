import { ArrowUpRight } from "lucide-react";
import { WorkMedia, WorkMediaProps } from "@/components/ui/work-media";
import { BlurFade } from "@/components/magicui/blur-fade";
import { RedirectDialog } from "@/components/ui/redirect-dialog";
import Image from "next/image";

type WorkItemProps = Omit<WorkMediaProps, 'fallback'> & {
    year: string | number;
    title: string;
    delay: number;
    href?: string;
    description?: string;
    fallback?: string;
};

export function WorkItem({ year, title, href, description, delay, fallback, ...media }: WorkItemProps) {
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

    const defaultFallback = (
        <div className="mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full h-40 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400">
            No media available
        </div>
    );

    const mediaFallback = fallback ? (
        <Image
            src={fallback}
            alt="Fallback image"
            width={600}
            height={400}
            className="mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full"
        />
    ) : defaultFallback;

    const Content = (
        <BlurFade delay={delay}>
            <div className="w-full">
                {Header}
                <WorkMedia {...media} fallback={mediaFallback} />
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
