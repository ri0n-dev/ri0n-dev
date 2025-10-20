import Image from "next/image";

type ImageItem = {
    src: string;
    alt: string;
};

type WorkMediaProps = {
    videoSrc?: string;
    videoAriaLabel?: string;
    imageSrcs?: ImageItem[];
    width?: number;
    height?: number;
    className?: string;
};

const baseMediaClass =
    "mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full";


export function WorkMedia({
    videoSrc,
    videoAriaLabel,
    imageSrcs,
    width = 600,
    height = 400,
    className,
}: WorkMediaProps) {
    const cls = className ? `${baseMediaClass} ${className}` : baseMediaClass;

    if (videoSrc) {
        return (
            <video
                key={videoSrc}
                className={cls}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label={videoAriaLabel}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }

    if (imageSrcs && imageSrcs.length > 0) {
        if (imageSrcs.length === 1) {
            const img = imageSrcs[0];
            return (
                <Image
                    src={img.src}
                    alt={img.alt}
                    width={width}
                    height={height}
                    className={cls}
                />
            );
        }

        return (
            <div className="flex flex-col">
                {imageSrcs.map((img, idx) => (
                    <Image
                        key={`${img.src}-${idx}`}
                        src={img.src}
                        alt={img.alt}
                        width={width}
                        height={height}
                        className={cls}
                    />
                ))}
            </div>
        );
    }

    return null;
}

export type { WorkMediaProps };
