import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WorkMedia, WorkMediaProps } from "@/components/ui/work-media";

type WorkItemProps = WorkMediaProps & {
    year: string | number;
    title: string;
    href?: string;
    description?: string;
};

export function WorkItem({ year, title, href, description, ...media }: WorkItemProps) {
    const Header = (
        <>
            <p className="text-[13px] flex items-center gap-1">
                <span className="text-neutral-400 dark:text-neutral-600 mr-2">{year}</span>
                {title}
                {href ? <ArrowUpRight size={14} className="inline-block" /> : null}
            </p>
            {description ? <p className="text-sm mt-1">{description}</p> : null}
        </>
    );

    const Content = (
        <div className="w-full">
            {Header}
            <WorkMedia {...media} />
        </div>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer">
                {Content}
            </Link>
        );
    }

    return Content;
}

export type { WorkItemProps };
