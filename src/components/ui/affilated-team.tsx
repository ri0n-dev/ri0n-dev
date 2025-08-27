import Image from "next/image"

export function Team() {
  return (
    <>
      {/* Phone */}
      <div className="sm:hidden z-0 pointer-events-none">
        <Image src={"/assets/card.png"} alt="Card" width={500} height={500} className="invert dark:invert-0 w-full h-45 object-contain scale-[1.7]" />
      </div>

      {/* Other */}
      <div className="hidden sm:block z-0 pointer-events-none">
        <Image src={"/assets/card.png"} alt="Card" width={500} height={500} className="invert dark:invert-0 w-full h-auto object-contain" />
      </div>
    </>
  )
}
