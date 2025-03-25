import type { Metadata } from "next";

const url = "https://ri0n.dev";
const icon = "/favicon.png";
const ogpIcon = "/ogp.webp";
const siteName = "Rion";
const description = "I am a student working as an engineer, doing web development and app development.";

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: {
        default: `${siteName}`,
        template: `%s / ${siteName}`
    },
    description,
    openGraph: {
        title: siteName,
        description,
        url,
        siteName,
        locale: "ja-JP",
        type: "website",
        images: ogpIcon
    },
    icons: icon,
    verification: {
        google: ""
    },
    publisher: `@ri0n_dev`,
    robots: "index, follow",
    creator: `@ri0n_dev`,
    keywords: ["Rion", "Ri0n", "PIENNU"],
};