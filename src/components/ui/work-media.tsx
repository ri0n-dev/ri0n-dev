"use client";

import Image from "next/image";

type ImageMediaItem = {
    type: 'image';
    src: string;
    darkSrc?: string;
    alt: string;
};

type VideoMediaItem = {
    type: 'video';
    src: string;
    darkSrc?: string;
};

type MediaItem = ImageMediaItem | VideoMediaItem;

type WorkMediaProps = {
    media?: MediaItem[];
    width?: number;
    height?: number;
};

const itemCls = "mt-3 rounded-md border-3 border-neutral-200 dark:border-neutral-800/80 w-full";

function VideoItem({ item }: { item: VideoMediaItem }) {
    return (
        <div className="flex-1 min-w-0">
            {item.src && (
                <div className={item.darkSrc ? "dark:hidden" : ""}>
                    <video
                        key={item.src}
                        className={itemCls}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                    >
                        <source src={item.src} type="video/mp4" />
                    </video>
                </div>
            )}
            {item.darkSrc && (
                <div className="hidden dark:block">
                    <video
                        key={item.darkSrc}
                        className={itemCls}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                    >
                        <source src={item.darkSrc} type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
}

function ImageItem({ item, width, height }: { item: ImageMediaItem; width: number; height: number }) {
    return (
        <div className="flex-1 min-w-0">
            <Image
                src={item.src}
                alt={item.alt}
                width={width}
                height={height}
                className={`${itemCls}${item.darkSrc ? " dark:hidden" : ""}`}
            />
            {item.darkSrc && (
                <Image
                    src={item.darkSrc}
                    alt={item.alt}
                    width={width}
                    height={height}
                    className={`${itemCls} hidden dark:block`}
                />
            )}
        </div>
    );
}

export function WorkMedia({ media, width = 600, height = 400 }: WorkMediaProps) {
    if (!media || media.length === 0) return null;

    return (
        <div className="flex flex-col gap-2 w-full">
            {media.map((item, idx) =>
                item.type === 'video'
                    ? <VideoItem key={idx} item={item} />
                    : <ImageItem key={idx} item={item} width={width} height={height} />
            )}
        </div>
    );
}

export type { WorkMediaProps, MediaItem, ImageMediaItem, VideoMediaItem };
