import { Musics } from "@/components/ui/musics"

export function About() {
    return (
        <section className="flex flex-col gap-y-3 items-left justify-center mt-15 text-neutral-500 dark:text-neutral-400 text-base text-left">
            <p>
                I'm a <span className="text-neutral-900 dark:text-neutral-100">developer</span> who enjoys{" "}
                <span className="text-neutral-900 dark:text-neutral-50">web development</span> and{" "}
                <span className="text-neutral-900 dark:text-neutral-100">design</span>.
            </p>
            <p>
                I live in <span className="text-neutral-900 dark:text-neutral-100">Sapporo, Japan</span>. In addition to
                development, I also create <span className="text-neutral-900 dark:text-neutral-100">videos</span> and work as a{" "}
                <span className="text-neutral-900 dark:text-neutral-100">malware tester</span>. My YouTube channel has over{" "}
                <span className="text-neutral-900 dark:text-neutral-100">3,000 subscribers</span> and a total of{" "}
                <span className="text-neutral-900 dark:text-neutral-100">1.3 million views</span>.
            </p>
            <p>
                I sometimes play Tetris for fun. Looking forward to{" "}
                <span className="text-neutral-900 dark:text-neutral-100">connecting</span> with you! :)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="relative p-6 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950">
                    <div className="absolute top-2 left-2 text-[10px] bg-neutral-950 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-600 dark:text-neutral-300">Favorite Songs</div>
                </div>

                <div className="relative p-6 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden flex items-center justify-center">
                    <div className="absolute top-2 left-2 text-[10px] bg-neutral-950 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-600 dark:text-neutral-300">Favorite Songs</div>
                    <Musics />
                </div>

                <div className="relative p-6 border-2 border-neutral-200 dark:border-neutral-800/80 rounded-xl bg-neutral-50 dark:bg-neutral-950">
                    <div className="absolute top-2 left-2 text-[10px] bg-neutral-950 dark:bg-neutral-50/5 rounded-lg px-2 py-1 text-neutral-600 dark:text-neutral-300">Favorite Songs</div>
                </div>
            </div>
        </section>
    )
}
