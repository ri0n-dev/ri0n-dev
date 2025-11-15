"use client"

import { useEffect, useState } from 'react'
import { SiSpotify } from "@icons-pack/react-simple-icons";
import { RedirectDialog } from "@/components/ui/redirect-dialog";

type LanyardPresence = {
    listening_to_spotify: boolean
    spotify: {
        timestamps: {
            start: number
            end: number
        }
        album: string
        album_art_url: string
        artist: string
        song: string
        track_id: string
    } | null
}


export function Activity() {
    const [presence, setPresence] = useState<LanyardPresence | null>(null)
    const [lastSpotify, setLastSpotify] = useState<LanyardPresence['spotify']>(null)

    useEffect(() => {
        const ws = new WebSocket('wss://api.lanyard.rest/socket')
        ws.onopen = () => {
            ws.send(JSON.stringify({
                op: 2,
                d: {
                    subscribe_to_id: "851357394976899116"
                }
            }))
        }
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data)
            if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
                setPresence(data.d)
                if (data.d.spotify) {
                    setLastSpotify(data.d.spotify)
                }
            }
        }
        return () => ws.close()
    }, [])

    const spotify = presence?.spotify

    return (
        <>
            {spotify ?
                <>
                    <span className="flex items-center text-neutral-900 dark:text-neutral-100 ml-1 mr-1 hover:underline">
                        <RedirectDialog href={`https://open.spotify.com/track/${spotify.track_id} `}>
                            <SiSpotify className="inline w-4 h-4 mr-1" /> {spotify.song} - {spotify.artist}
                        </RedirectDialog>
                    </span> now
                </> :
                lastSpotify ?
                    <>
                        <span className="flex items-center text-neutral-900 dark:text-neutral-100 ml-1 mr-1 hover:underline">
                            <RedirectDialog href={`https://open.spotify.com/track/${lastSpotify.track_id} `}>
                                <SiSpotify className="inline w-4 h-4 mr-1" /> {lastSpotify.song} - {lastSpotify.artist}
                            </RedirectDialog>
                        </span> last
                    </> :
                    <>
                        <span className="flex items-center ml-1 mr-1">
                            <SiSpotify className="inline w-4 h-4 mr-1" /> nothing right now
                        </span>
                    </>
            }
        </>
    )
}
