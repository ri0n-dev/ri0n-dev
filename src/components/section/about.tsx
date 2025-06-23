import Image from "next/image";
import Link from "next/link";
import { SiYoutube, SiX, SiGithub, SiDiscord, SiNextdotjs, SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiCss, SiHtml5, SiDotnet, SiPhp, SiMysql, SiSupabase, SiMarkdown, SiVercel, SiAstro, SiGithubsponsors, SiMisskey, SiZenbrowser } from "@icons-pack/react-simple-icons";
import { ChevronLeft, ChevronRight, RotateCw, Bookmark, Ellipsis } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Marquee } from "@/components/magicui/marquee";
import GlowText from "@/components/ui/glow-text";

const stacks = [SiNextdotjs, SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiCss, SiHtml5, SiDotnet, SiPhp, SiMysql, SiSupabase, SiMarkdown, SiVercel, SiAstro];

const BentoCard = ({ children, className = "", style = {}, ...props }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; }) => (
    <div className={`bg-neutral-50/3 rounded-2xl p-10 font-geist ${className}`} {...props} style={{ backgroundImage: `radial-gradient(at 88% 40%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(0,0%,26%,2%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(0,0%,36%,2%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(0,0%,13%,2%) 0px, transparent 85%)`, ...style }}>
        {children}
    </div>
);

const IconCard = ({ Icon }: { Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => {
    return (
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl border border-white/5 bg-white/1 transition-all duration-300 hover:scale-105">
            <div className="will-change-transform transition-all duration-300 hover:scale-105">
                <Icon className="w-7.5 h-7.5 text-white drop-shadow-[0_0_6px_white]" />
            </div>
        </div>
    );
};

export default function About() {
    return (
        <section id="about" className="flex flex-col font-inter relative max-w-300 w-full overflow-hidden mx-auto">
            <div className="flex flex-col mt-43 justify-center items-center gap-y-4">
                <h1 className="text-neutral-100 font-cormorant text-5xl md:text-7xl font-bold mb-3 font-pp"><span className="text-neutral-300">About</span> Me</h1>
                <div className="grid grid-cols-6 grid-rows-4 gap-4 h-screen max-h-[400px]">
                    <BentoCard className="col-span-4 row-span-4">
                        <div className="flex flex-row items-center justify-between h-full w-full gap-x-4">
                            <div className="flex flex-col">
                                <p className="text-neutral-100 text-5xl font-bold mb-2">Profile</p>
                                <p className="text-neutral-400 text-base md:text-base leading-relaxed font-inter">
                                    My name is Rion. I am a web developer focusing on both front-end and back-end, living in Sapporo. As a hobby, I also run a channel with over 3,000 subscribers and more than 1.3M total views. I also enjoy playing Tetris in my free time.
                                </p>
                                <div className="flex items-center gap-x-3.5 mt-5">
                                    <Link href="https://www.youtube.com/@piennu_777" target="_blank" rel="noopener noreferrer">
                                        <SiYoutube width={23} height={23} className="text-neutral-300" />
                                    </Link>
                                    <Link href="https://x.com/ri0n_dev" target="_blank" rel="noopener noreferrer">
                                        <SiX width={23} height={23} className="text-neutral-300" />
                                    </Link>
                                    <Link href="https://github.com/ri0n-dev" target="_blank" rel="noopener noreferrer">
                                        <SiGithub width={23} height={23} className="text-neutral-300" />
                                    </Link>
                                    <Link href="https://discord.com/users/851357394976899116" target="_blank" rel="noopener noreferrer">
                                        <SiDiscord width={23} height={23} className="text-neutral-300" />
                                    </Link>
                                </div>
                            </div>
                            <Image src={"/assets/me.jpg"} alt="icon" width={650} height={650} className="w-65 h-full object-cover rounded-xl" />
                        </div>
                    </BentoCard>

                    <BentoCard className="col-span-2 row-span-4 relative p-6 flex flex-col">
                        <div className="relative flex flex-col h-full">
                            <Image src="/assets/zisty.svg" alt="zisty" width={500} height={500} className="drop-shadow-[0_0_50px_rgba(255,255,255,0.7)] absolute top-1/2 left-1/2 w-full h-full pb-7 object-contain opacity-20 z-0 -translate-x-1/2 -translate-y-1/2" />
                            <div className="flex-1 flex items-center justify-center mb-4 z-10">
                                <div className="*:data-[slot=avatar]:ring-neutral-800 flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1914457806679498756/gi2pV6jy_400x400.jpg" alt="@ri0n_dev" />
                                        <AvatarFallback>RI</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1879463762627072000/WnD4sJ1V_400x400.jpg" alt="@tanahiro2010" />
                                        <AvatarFallback>TH</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://cdn.discordapp.com/avatars/1004348660181630977/6445e3f6eddfbad4b0130e9680552673.webp?size=1024" alt="@kazu" />
                                        <AvatarFallback>KZ</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1772492028636737536/bClftlxv_400x400.jpg" alt="@syobosyobonn" />
                                        <AvatarFallback>SY</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://9z5q.github.io/lovelang.png" alt="@sigma" />
                                        <AvatarFallback>SG</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1863135999087505408/5qjunahh_400x400.jpg" alt="@xxtomm" />
                                        <AvatarFallback>TM</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1915770562779209728/yZyDjjpC_400x400.jpg" alt="@rai" />
                                        <AvatarFallback>RA</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1873678657379774464/_IXeWAJ0_400x400.jpg" alt="@umaidango" />
                                        <AvatarFallback>UM</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://cdn.discordapp.com/avatars/1381227903508811848/0cb68ff304e2db706f4bb98a60b9a64a.webp?size=512" alt="@yunai" />
                                        <AvatarFallback>YN</AvatarFallback>
                                    </Avatar>
                                    <Avatar>
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1773615356420239360/UglquU_j_400x400.jpg" alt="@takoyaki" />
                                        <AvatarFallback>TK</AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold">Team</h2>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-geist">
                                It&apos;s a team mainly composed of student developers. I founded the team and serve as its owner.
                            </p>
                        </div>
                    </BentoCard>
                </div>

                <div className="grid grid-cols-10 grid-rows-4 gap-4 h-screen max-h-[400px]">
                    <BentoCard className="col-span-4 row-span-4 relative p-6 pt-4 flex flex-col">
                        <div className="relative flex flex-col h-full pb-3">
                            <SparklesText colors={{ first: "#fff", second: "#a3a3a3" }} className="w-full h-full flex items-center justify-center">
                                <div className="py-3 px-1 w-full h-full">
                                    <div className="w-full h-full rounded-md border border-neutral-800 drop-shadow-[0_0_40px_white] overflow-hidden">
                                        <div className="relative w-full h-7 pt-0.5 pb-0.5 border-b border-neutral-800 px-2">
                                            <div className="absolute left-2 top-0 h-full flex items-center gap-1">
                                                <ChevronLeft size={12} color="#737373" />
                                                <ChevronRight size={12} color="#737373" />
                                                <RotateCw size={12} color="#737373" />
                                            </div>
                                            <div className="absolute right-2 top-0 h-full flex items-center">
                                                <Ellipsis size={12} color="#737373" />
                                            </div>
                                            <div className="flex gap-1 justify-center items-center h-full">
                                                <Bookmark size={12} color="#737373" />
                                                <div className="px-10 border border-neutral-800 rounded-sm flex items-center">
                                                    <div className="text-[10px] text-neutral-200">www.ri0n.dev</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SparklesText>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold">Stylish</h2>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-inter">
                                I create cool, beautiful, stunning, amazing, and intersting designs.
                            </p>
                        </div>
                    </BentoCard>

                    <BentoCard className="col-span-4 row-span-4 relative p-6 pt-4 flex flex-col">
                        <div className="relative flex flex-col h-full pb-3 mb-3 overflow-hidden items-center justify-end">
                            <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
                                <div className="flex flex-row items-center gap-2" style={{ transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)", }}>
                                    <Marquee vertical className="[--duration:20s]">
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                    <Marquee reverse className="[--duration:20s]" vertical>
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                    <Marquee reverse className="[--duration:20s]" vertical>
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                    <Marquee className="[--duration:20s]" vertical>
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                    <Marquee reverse className="[--duration:20s]" vertical>
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                    <Marquee className="[--duration:20s]" vertical>
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                    <Marquee reverse className="[--duration:20s]" vertical>
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                    <Marquee className="[--duration:20s]" vertical>
                                        {stacks.map((Icon, i) => (
                                            <IconCard key={i} Icon={Icon} />
                                        ))}
                                    </Marquee>
                                </div>
                            </div>

                        </div>
                        <div className="space-y-4">
                            <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold">Skill</h2>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-geist">
                                Here are the services, languages, and frameworks I can work with.
                            </p>
                        </div>
                    </BentoCard>

                    <BentoCard className="col-span-2 row-span-2 relative p-1 flex flex-col">
                        <div className="flex flex-col h-full items-center justify-center text-center">
                            <div className="text-7xl font-bold bg-gradient-to-r from-neutral-700 via-white to-neutral-700 bg-clip-text text-transparent">
                                1M+
                            </div>
                            <p className="text-neutral-600 text-xs leading-relaxed font-geist mt-2">Total number of views</p>
                        </div>
                    </BentoCard>

                    <BentoCard className="col-span-2 row-span-2 relative p-1 flex flex-col">
                        <div className="flex flex-col h-full items-center justify-center text-center">
                            <div className="text-7xl font-bold bg-gradient-to-r from-neutral-700 via-white to-neutral-700 bg-clip-text text-transparent">
                                3K+
                            </div>
                            <p className="text-neutral-600 text-xs leading-relaxed font-geist mt-2">Total number of subscribers</p>
                        </div>
                    </BentoCard>
                </div>

                <BentoCard className="w-full relative p-6 flex flex-col">
                    <div className="flex flex-col h-full items-center justify-center text-center">
                        <GlowText className="text-neutral-100">
                            <div className="flex items-center gap-2">
                                <SiGithubsponsors color="#f5f5f5" />
                                <h2 className="text-neutral-100 text-3xl md:text-4xl font-bold">Contributor</h2>
                            </div>
                        </GlowText>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-geist mt-2">
                            Here are the projects and organizations I have contributed to or supported.
                        </p>

                        <div className="flex w-full border-t justify-center pt-7 border-neutral-800 rounded-t-full items-center gap-6 mt-5">
                            <a href="https://github.com/zen-browser/www" target="_blank"><SiZenbrowser size={40} color="#d4d4d4" /></a>
                            <a href="https://github.com/misskey-dev" target="_blank"><SiMisskey size={40} color="#d4d4d4" /></a>
                            <a href="https://github.com/raicdev/deni-ai" target="_blank"><Image src={"/assets/deni-ai.svg"} alt="Deni AI" width={40} height={40} style={{ filter: 'invert(93%) sepia(0%) saturate(11%) hue-rotate(151deg) brightness(92%) contrast(90%)' }} /></a>
                            <a href="https://github.com/teamzisty" target="_blank"><Image src={"/assets/zisty.svg"} alt="Zisty" width={40} height={40} style={{ filter: 'invert(93%) sepia(0%) saturate(11%) hue-rotate(151deg) brightness(92%) contrast(90%)' }} /></a>
                        </div>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
}