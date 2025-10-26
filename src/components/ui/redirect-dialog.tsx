import Link from "next/link";
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
import { MessageCircleWarning } from '@/components/animate-ui/icons/message-circle-warning';
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function RedirectDialog({ children, href }: { children: React.ReactNode; href: string }) {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 640px)");

    return (
        <>
            {isDesktop ? (
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <div className="cursor-pointer">
                            {children}
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[480px]">
                        <DialogHeader>
                            <DialogTitle className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
                                <MessageCircleWarning className="mb-2.5 text-neutral-400" size={20} animate={open} />
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
            ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <div className="cursor-pointer">
                            {children}
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="mb-30">
                            <DrawerTitle className="flex flex-col justify-center items-center">
                                <MessageCircleWarning className="mb-2.5 text-neutral-400" size={20} animate={open} />
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
            )}
        </>
    );
}