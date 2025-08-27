import { Lang } from "@/components/ui/favorite-lang"
import { Songs } from "@/components/ui/favorite-songs"
import { Team } from "@/components/ui/affilated-team"

export function CardGrid() {
    return (
        <>
            {/* Phone */}
            <div className="grid sm:hidden">
                <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="relative grid grid-cols-2 h-50 pt-11.5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden col-span-2">
                        <div className="absolute top-2 left-2 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Favorite Langs</div>
                        <Lang />
                    </div>

                    <div className="relative grid grid-cols-1 h-50 pt-2 pb-5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-[#f6f6f6] dark:bg-neutral-950 overflow-hidden">
                        <div className="absolute top-2 left-2 z-10 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Affiliated Team</div>
                        <Team />
                    </div>
                </div>
                <div className="relative h-65 mt-4 pb-5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Favorite Songs</div>
                    <Songs />
                </div>
            </div>

            {/* Tablet */}
            <div className="hidden sm:block md:hidden">
                <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="relative h-65 pt-11.5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
                        <div className="absolute top-2 left-2 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Favorite Langs</div>
                        <Lang />
                    </div>

                    <div className="relative h-65 pt-2 pb-5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-[#f6f6f6] dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
                        <div className="absolute top-2 left-2 z-10 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Affiliated Team</div>
                        <Team />
                    </div>
                </div>
                <div className="relative h-65 mt-4 pb-5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Favorite Songs</div>
                    <Songs />
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-3 gap-4 mt-10 h-56">
                <div className="relative pt-11.5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
                    <div className="absolute top-2 left-2 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Favorite Langs</div>
                    <Lang />
                </div>

                <div className="relative pt-2 pb-5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Favorite Songs</div>
                    <Songs />
                </div>

                <div className="relative pt-2 pb-5 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-[#f6f6f6] dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 z-10 text-[10px] bg-neutral-100 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-500 dark:text-neutral-300">Affiliated Team</div>
                    <Team />
                </div>
            </div>
        </>
    );
}
