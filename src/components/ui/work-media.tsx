import Image from "next/image";
import { useState, useEffect } from "react";

type WorkMediaProps = {
    videoSrc?: string;
    videoAriaLabel?: string;
    imageSrc?: { src: string; alt: string }[];
    width?: number;
    height?: number;
    fallback?: string;
};

export function WorkMedia({
    videoSrc,
    videoAriaLabel,
    imageSrc,
    width = 600,
    height = 400,
    fallback,
}: WorkMediaProps) {
    const cls = "mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full";
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [hasVideoError, setHasVideoError] = useState(false);

    useEffect(() => {
        if (videoSrc) {
            setIsVideoLoaded(false);
            setHasVideoError(false);
        }
    }, [videoSrc]);

    if (videoSrc) {
        return (
            <>
                {(!isVideoLoaded || hasVideoError) && fallback && (
                    <Image
                        src={fallback}
                        alt="video loading placeholder"
                        width={width}
                        height={height}
                        className={cls}
                        priority={false}
                        aria-hidden={!isVideoLoaded && !hasVideoError ? "true" : undefined}
                    />
                )}

                <video
                    key={videoSrc}
                    className={cls}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={videoAriaLabel}
                    onLoadedData={() => setIsVideoLoaded(true)}
                    onError={() => setHasVideoError(true)}
                    style={{ display: isVideoLoaded && !hasVideoError ? "block" : "none" }}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser is not supported 😒
                </video>
            </>
        );
    }

    if (imageSrc) {
        return (
            <div className="flex flex-col">
                {imageSrc.map((img, idx) => (
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

    if (fallback) {
        return (
            <Image
                src={fallback}
                alt="Fallback media"
                width={width}
                height={height}
                className={cls}
            />
        );
    }

    return null;
}

export type { WorkMediaProps };