"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { SiSpotify } from "@icons-pack/react-simple-icons"

interface Album {
  src: string;
  alt: string;
  title: string;
  artist: string;
  position: string;
  zIndex: number;
  url: string;
}

export function Songs() {
  const albums = [
    [
      {
        src: "https://m.media-amazon.com/images/I/51JOP7NcZ0L._UXNaN_FMjpg_QL85_.jpg",
        alt: "All My Life - Lil Durk & J. Cole",
        title: "All My Life",
        artist: "Lil Durk & J. Cole",
        position: "translate(-50%, -50%) rotate(-5deg) translateX(-80px) translateY(10px)",
        zIndex: 1,
        url: "https://open.spotify.com/track/6HgWWaMu31KdOpEG5l28BG?si=ee8675636b5d4176",
      },
      {
        src: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5",
        alt: "STAY - The Kid LAROI & Justin Bieber",
        title: "STAY",
        artist: "The Kid LAROI & Justin Bieber",
        position: "translate(-50%, -50%) rotate(5deg) translateX(80px) translateY(10px)",
        zIndex: 2,
        url: "https://open.spotify.com/track/567e29TDzLwZwfDuEpGTwo?si=dd048816b96241a5",
      },
      {
        src: "https://i.scdn.co/image/ab67616d0000b273942a0c9ac8f1def7c8805044",
        alt: "The Search - NF",
        title: "The Search",
        artist: "NF",
        position: "translate(-50%, -50%)",
        zIndex: 3,
        url: "https://open.spotify.com/track/2OKo7g3KfmCt3kyLvUAL0g?si=9012efe107084510",
      },
    ],
    [
      {
        src: "https://i.scdn.co/image/ab67616d0000b273c0ebac1bf7757bfc5dabf885",
        alt: "Blood (Alucard Rap) - Rustage",
        title: "Blood (Alucard Rap)",
        artist: "Rustage",
        position: "translate(-50%, -50%) rotate(-5deg) translateX(-80px) translateY(10px)",
        zIndex: 1,
        url: "https://open.spotify.com/track/2deb24yUrqgOVwGJjaIaYp?si=75d1606027b340d0",
      },
      {
        src: "https://i.scdn.co/image/ab67616d0000b273dd0a40eecd4b13e4c59988da",
        alt: "Happier - Marshmello & Bastille",
        title: "Happier",
        artist: "Marshmello & Bastille",
        position: "translate(-50%, -50%) rotate(5deg) translateX(80px) translateY(10px)",
        zIndex: 2,
        url: "https://open.spotify.com/track/7BqHUALzNBTanL6OvsqmC1?si=3cf5dafdeef54c46",
      },
      {
        src: "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023",
        alt: "Mockingbird - Eminem",
        title: "Mockingbird",
        artist: "Eminem",
        position: "translate(-50%, -50%)",
        zIndex: 3,
        url: "https://open.spotify.com/track/561jH07mF1jHuk7KlaeF0s?si=eeeba2e7869144c8",
      },
    ],
    [
      {
        src: "https://i.scdn.co/image/ab67616d0000b27346de608b5a2ce2068c3cb5c2",
        alt: "Canvas - Kaneee, STUTS",
        title: "Canvas",
        artist: "Kaneee, STUTS",
        position: "translate(-50%, -50%) rotate(-5deg) translateX(-80px) translateY(10px)",
        zIndex: 1,
        url: "https://open.spotify.com/track/1HasPp7AYTmRj9lHHfO3AT?si=3ed53917394c44c0",
      },
      {
        src: "https://i.scdn.co/image/ab67616d0000b2732de552406fe83116cc9eb4d5",
        alt: "YOUR WAY'S BETTER - Forrest Frank",
        title: "YOUR WAY'S BETTER",
        artist: "Forrest Frank",
        position: "translate(-50%, -50%) rotate(5deg) translateX(80px) translateY(10px)",
        zIndex: 2,
        url: "https://open.spotify.com/track/4qrbjoNP9NZwe79Rg9IlFU?si=1363da621d9f413b",
      },
      {
        src: "https://i.scdn.co/image/ab67616d0000b273c5148520a59be191eea16989",
        alt: "High Hopes - Panic! At The Disco",
        title: "High Hopes",
        artist: "Panic! At The Disco",
        position: "translate(-50%, -50%)",
        zIndex: 3,
        url: "https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom?si=baa4d043be074547",
      },
    ],
  ]
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 1) % albums.length)

        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 400)
    }, 4000)

    return () => clearInterval(interval)
  }, [albums.length])


  const currentAlbums = albums[currentSetIndex]

  const handleImageClick = (album: Album) => {
    setSelectedAlbum(album)
    setIsDialogOpen(true)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[680px] h-[200px] overflow-hidden">
        {currentAlbums.map((album, index) => (
          <div
            key={`${currentSetIndex}-${album.url}`}
            className={`absolute w-23 h-23 rounded-xl border-3 border-white dark:border-neutral-800 shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl
              transition-all duration-700 ease-out
              ${isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-none"}`}
            style={{
              transform: album.position,
              zIndex: album.zIndex,
              top: "50%",
              left: "50%",
              transformOrigin: "center center",
              transitionDelay: isTransitioning ? "0ms" : `${index * 100}ms`,
            }}
            onClick={() => handleImageClick(album)}
          >
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src={album.src || "/placeholder.svg"}
                alt={album.alt}
                width={640}
                height={640}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 flex space-x-2">
        {albums.map((_, index) => (
          <div key={index} className={`w-1 h-1 rounded-full transition-all duration-300 ${index === currentSetIndex ? "bg-neutral-400 dark:bg-neutral-500 scale-125" : "bg-neutral-300 dark:bg-neutral-600"}`} />
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] overflow-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {selectedAlbum && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedAlbum.title}</DialogTitle>
                <DialogDescription>{selectedAlbum.artist}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex justify-center">
                  <Image
                    src={selectedAlbum.src || "/placeholder.svg"}
                    alt={selectedAlbum.alt}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col gap-y-2 text-center mt-2">
                  <Link href={selectedAlbum.url} target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center mt-4 w-full">Listen on Spotify<SiSpotify /></Button>
                  </Link>
                  <Button onClick={() => setIsDialogOpen(false)} variant="ghost" className="w-full">Go Back</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div >
  )
}
