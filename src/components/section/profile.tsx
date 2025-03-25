import Image from "next/image";
import icon from "@/assets/icon.jpg";
import style from "@/styles/profile.module.css"

export function Profile() {
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg w-full">
                <div className="flex items-center space-x-4">
                    <Image src={icon} alt="Me Icon" width={48} height={48} className="w-12 h-12 rounded-lg" />
                    <div>
                        <p className="text-lg font-semibold">Rion</p>
                        <p className="text-sm text-gray-500">Web Developer</p>
                    </div>
                </div>
                <div className={`flex space-x-3 ${style.sns}`}>
                    <a href="#" className="text-gray-500 hover:text-gray-600">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-600">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-600">
                        <i className="bi bi-discord"></i>
                    </a>
                </div>
            </div>
        </>
    );
}