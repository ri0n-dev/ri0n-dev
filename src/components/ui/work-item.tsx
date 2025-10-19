import Link from "next/link";
import { ArrowUpRight, MessageCircleWarning } from "lucide-react";
import { WorkMedia, WorkMediaProps } from "@/components/ui/work-media";
import { BlurFade } from "@/components/magicui/blur-fade";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";

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
                {/* Desktop */}
                <div className="hidden sm:block">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="cursor-pointer">
                                {Content}
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[480px]">
                            <DialogHeader>
                                <DialogTitle className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
                                    <MessageCircleWarning className="mb-2.5 text-neutral-400" size={20} />
                                    Move to Another Page?
                                </DialogTitle>
                                <DialogDescription>
                                    Are you sure you want to go to another page?
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="mt-3 sm:mt-1.5">
                                <DialogClose asChild>
                                    <Button variant="outline">Go Back</Button>
                                </DialogClose>
                                <Link href={href} target="_blank" rel="noopener noreferrer">
                                    <Button className="gap-1 w-full">Visit Site <ArrowUpRight size={14} /></Button>
                                </Link>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Phone */}
                <div className="block sm:hidden">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <div className="cursor-pointer">
                                {Content}
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className="mb-35">
                                <DrawerTitle className="flex flex-col justify-center items-center">
                                    <MessageCircleWarning className="mb-2.5 text-neutral-400" size={20} />
                                    Move to Another Page?
                                </DrawerTitle>
                                <DrawerDescription>
                                    Are you sure you want to go to another page?
                                </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <Link href={href} target="_blank" rel="noopener noreferrer">
                                    <Button className="gap-1 w-full">Visit Site <ArrowUpRight size={14} /></Button>
                                </Link>
                                <DrawerClose>
                                    <Button variant="outline" className="w-full">Go Back</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </>
        );
    }

    return Content;
}

export type { WorkItemProps };
