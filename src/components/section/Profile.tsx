import Image from "next/image";
import { SiX, SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";
import style from "@/styles/profile.module.css"

export function Profile() {
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg w-full">
                <div className="flex items-center space-x-4">
                    <Image src={"/icon.jpg"} alt="Me Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
                    <div>
                        <p className="text-lg font-semibold">Rion</p>
                        <p className="text-sm text-gray-500">Web Developer</p>
                    </div>
                </div>
                <div className={`flex space-x-3 ${style.sns}`}>
                    <a href="https://x.com/ri0n_dev" target="_blank" className="text-gray-500 hover:text-gray-600">
                        <SiX width={24} height={24} />
                    </a>
                    <a href="https://github.com/ri0n-dev" target="_blank" className="text-gray-500 hover:text-gray-600">
                        <SiGithub width={24} height={24} />
                    </a>
                    <a href="https://discord.gg/6BPfVm6cST" target="_blank" className="text-gray-500 hover:text-gray-600">
                        <SiDiscord width={24} height={24} />
                    </a>
                </div>
            </div>
        </>
    );
}
