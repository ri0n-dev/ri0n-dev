"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type WorkMediaProps = {
    videoSrc?: string;
    darkVideoSrc?: string;
    videoAriaLabel?: string;
    imageSrc?: { src: string; darkSrc?: string; alt: string }[];
    width?: number;
    height?: number;
    fallback?: string;
    darkFallback?: string;
};

export function WorkMedia({
    videoSrc,
    darkVideoSrc,
    videoAriaLabel,
    imageSrc,
    width = 600,
    height = 400,
    fallback,
    darkFallback,
}: WorkMediaProps) {
    const cls = "mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full";
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [hasVideoError, setHasVideoError] = useState(false);

    useEffect(() => {
        if (videoSrc || darkVideoSrc) {
            setIsVideoLoaded(false);
            setHasVideoError(false);
        }
    }, [videoSrc, darkVideoSrc]);

    if (videoSrc || darkVideoSrc) {
        const showFallback = !isVideoLoaded || hasVideoError;
        return (
            <>
                {showFallback && fallback && (
                    <Image
                        src={fallback}
                        alt="video loading placeholder"
                        width={width}
                        height={height}
                        className={`${cls}${darkFallback ? " dark:hidden" : ""}`}
                        priority={false}
                        aria-hidden={showFallback ? "true" : undefined}
                    />
                )}
                {showFallback && darkFallback && (
                    <Image
                        src={darkFallback}
                        alt="video loading placeholder"
                        width={width}
                        height={height}
                        className={`${cls} hidden dark:block`}
                        priority={false}
                        aria-hidden={showFallback ? "true" : undefined}
                    />
                )}

                {videoSrc && (
                    <div className={darkVideoSrc ? "dark:hidden" : ""}>
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
                    </div>
                )}
                {darkVideoSrc && (
                    <div className="hidden dark:block">
                        <video
                            key={darkVideoSrc}
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
                            <source src={darkVideoSrc} type="video/mp4" />
                            Your browser is not supported 😒
                        </video>
                    </div>
                )}
            </>
        );
    }

    if (imageSrc) {
        return (
            <div className="flex flex-col">
                {imageSrc.map((img, idx) => (
                    <span key={`${img.src}-${idx}`}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={width}
                            height={height}
                            className={`${cls}${img.darkSrc ? " dark:hidden" : ""}`}
                        />
                        {img.darkSrc && (
                            <Image
                                src={img.darkSrc}
                                alt={img.alt}
                                width={width}
                                height={height}
                                className={`${cls} hidden dark:block`}
                            />
                        )}
                    </span>
                ))}
            </div>
        );
    }

    if (fallback || darkFallback) {
        return (
            <>
                {fallback && (
                    <Image
                        src={fallback}
                        alt="Fallback media"
                        width={width}
                        height={height}
                        className={`${cls}${darkFallback ? " dark:hidden" : ""}`}
                    />
                )}
                {darkFallback && (
                    <Image
                        src={darkFallback}
                        alt="Fallback media"
                        width={width}
                        height={height}
                        className={`${cls} hidden dark:block`}
                    />
                )}
            </>
        );
    }

    return null;
}

export type { WorkMediaProps };
