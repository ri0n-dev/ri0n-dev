import { Coffee, Hammer, PanelsTopLeft } from "lucide-react";
import Marquee from "react-fast-marquee";
import { SiHtml5, SiCss, SiPhp, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiDotnet, SiGit, SiSupabase } from "@icons-pack/react-simple-icons";
import style from "@/styles/cards.module.css";

export function Cards() {
    return (
        <>
            <div className="w-full mx-auto">
                <div className="flex flex-row gap-4 mb-5">
                    <div className="flex-1 border border-gray-200 text-gray-800 rounded-lg p-4 md:p-6">
                        <Coffee width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1} />
                        <h1 className="text-xl md:text-2xl mb-2 md:mb-3">About me</h1>

                        <p className="text-xs md:text-sm mb-3 md:mb-5">
                            I am a web developer focusing on both front-end and back-end, living in Sapporo.
                            As a hobby, I also run a <a href="https://www.youtube.com/@piennu_777"><i className="bi bi-youtube"></i> channel</a> with over 3,000 subscribers and more than
                            1 million total views.
                        </p>
                    </div>


                    <div className="flex justify-center items-center w-16 md:w-24 lg:w-32 border border-gray-200 rounded-lg" style={{ background: `repeating-linear-gradient(0deg, transparent, transparent 20px, #ebebeb 20px, #ebebeb 21px), repeating-linear-gradient(50deg, transparent, transparent 20px, #ebebeb 20px, #ebebeb 21px)` }}>
                        <p className="transform rotate-90 text-3xl md:text-4xl lg:text-5xl text-gray-800 font-thin">HELLO</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-5/12 border border-gray-200 rounded-lg p-6">
                        <div className="text-gray-800 mb-5">
                            <PanelsTopLeft width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1} />
                            <h1 className="text-xl md:text-2xl mb-3">Fashionable</h1>

                            <p className="text-sm">I strive to create a stylish website.</p>
                        </div>

                        <div className={`${style.skeleton} mb-2`} style={{ width: "100%", height: "20px" }}></div>
                        <div className={`${style.skeleton}`} style={{ width: "70%", height: "15px" }}></div>
                    </div>

                    <div className="w-full md:w-7/12 border border-gray-200 rounded-lg p-6 mb-4 md:mb-0 overflow-hidden">
                        <div className="text-gray-800 mb-10">
                            <Hammer width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1} />
                            <h1 className="text-xl md:text-2xl mb-3">My Skill</h1>

                            <p className="text-sm">I can develop using these.</p>
                        </div>

                        <Marquee gradient gradientColor="#ffffff" className="text-muted-foreground w-full">
                            <div className="flex mx-4 gap-x-8">
                                <SiHtml5 size={30} />
                                <SiCss size={30} />
                                <SiPhp size={30} />
                                <SiJavascript size={30} />
                                <SiTypescript size={30} />
                                <SiReact size={30} />
                                <SiNextdotjs size={30} />
                                <SiNodedotjs size={30} />
                                <SiTailwindcss size={30} />
                                <SiDotnet size={30} />
                                <SiGit size={30} />
                                <SiSupabase size={30} />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    );
}