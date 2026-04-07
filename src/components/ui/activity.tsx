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
    const [now, setNow] = useState<LanyardPresence | null>(null)

    useEffect(() => {
        const fetchPresence = async () => {
            const res = await fetch('https://api.lanyard.rest/v1/users/851357394976899116')
            const data = await res.json()
            if (data.success) {
                setNow(data.data)
            }
        }

        fetchPresence()
    }, [])

    const spotify = now?.spotify

    return (
        <>
            {spotify ?
                <>
                    <span className="inline-flex items-center text-neutral-900 dark:text-neutral-100 hover:underline">
                        <RedirectDialog href={`https://open.spotify.com/track/${spotify.track_id} `}>
                            <span><SiSpotify className="inline w-4 h-4 mr-0.5 mb-0.5" /> {spotify.song} - {spotify.artist.split(';').map(a => a.trim()).join(', ')}</span>
                        </RedirectDialog>
                    </span> now
                </> :
                    <>
                        <span>
                            <SiSpotify className="inline w-4 h-4 ml-0.5 mr-0.5 mb-0.5" /> nothing right now
                        </span>
                    </>
            }
        </>
    )
}
