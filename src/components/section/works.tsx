import Image from "next/image";
import Link from "next/link";
import { SiTypescript, SiReact, SiNextdotjs, SiFresh, SiTailwindcss, SiDeno, SiDiscord, SiOpenai, SiGooglegemini } from "@icons-pack/react-simple-icons";

const Work = ({ image, alt, role, title, description, icons, }: { image: string; alt: string; role: string; title: string; description: string; icons: React.ComponentType<{ color: string; size: number }>[]; }) => {
    return (
        <div className={`bg-neutral-50/3 rounded-2xl p-10 font-geist`} style={{ backgroundImage: `radial-gradient(at 88% 40%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 49% 30%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 14% 26%, hsl(0,0%,10%,2%) 0px, transparent 85%), radial-gradient(at 0% 64%, hsl(0,0%,26%,2%) 0px, transparent 85%), radial-gradient(at 41% 94%, hsl(0,0%,36%,2%) 0px, transparent 85%), radial-gradient(at 100% 99%, hsl(0,0%,13%,2%) 0px, transparent 85%)` }}>
            <div className="col-span-1 row-span-2 relative flex flex-col">
                <div className="aspect-video w-full">
                    <Image src={image} alt={alt} width={600} height={300} className="w-full h-full rounded-xl object-cover" />
                </div>

                <div className="pt-5 text-left">
                    <p className="text-neutral-400 text-base">{role}</p>
                    <h3 className="text-2xl font-semibold text-neutral-100 mb-3">{title}</h3>
                    <p className="text-neutral-400 text-sm leading-tight">{description}</p>
                </div>

                <div className="flex gap-x-3 pt-5 text-left">
                    {icons.map((Icon, i) => (
                        <Icon key={i} color="#a1a1a1" size={26} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Works() {
    return (
        <section id="works" className="flex flex-col font-inter mt-43 justify-center items-center gap-y-4 relative max-w-300 w-full overflow-hidden mx-auto">
            <h1 className="text-neutral-100 font-cormorant text-5xl md:text-7xl font-bold mt-30 mb-3 font-pp">Works</h1>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <Link href="https://zisty.net/" target="_blank" rel="noopener noreferrer">
                    <Work
                        image="/assets/preview-zisty.png"
                        alt="Zisty"
                        role="Founder"
                        title="Zisty"
                        description="We are a community team of mainly Japanese students who love programming"
                        icons={[SiTypescript, SiReact, SiNextdotjs, SiTailwindcss]}
                    />
                </Link>

                <Link href="https://ai-x.ri0n.dev/" target="_blank" rel="noopener noreferrer">
                    <Work
                        image="/assets/preview-aix.png"
                        alt="AI-x"
                        role="Backend Developer"
                        title="AI-x"
                        description="AI-x is an AI that operates on Discord, capable of generating both images and text. It supports various models."
                        icons={[SiTypescript, SiDeno, SiFresh, SiDiscord, SiOpenai, SiGooglegemini]}
                    />
                </Link>

                <Work
                    image="/assets/preview-comingsoon.png"
                    alt="Coming soon"
                    role="Backend & Frontend Developer"
                    title="Bakey"
                    description="Coming soon"
                    icons={[SiTypescript, SiReact, SiNextdotjs, SiTailwindcss]}
                />

                <Work
                    image="/assets/preview-comingsoon.png"
                    alt="Coming soon"
                    role="Backend & Frontend Developer"
                    title="Yajuusenp.ai"
                    description="Coming soon"
                    icons={[SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiOpenai]}
                />
            </div >
        </section>
    );
}