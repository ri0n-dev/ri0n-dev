import { Dock } from "./dock"
import { SiTypescript, SiJavascript, SiGo, SiPhp } from "@icons-pack/react-simple-icons"

export function Lang() {
  return (
    <>
      <div className="relative z-0 opacity-10 pointer-events-none -mt-2">
        <pre className="text-[10px] md:text-sm lg:text-base font-mono text-neutral-600 dark:text-neutral-500 overflow-hidden">
          <div className="flex flex-col">
            {`
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono().get('/', (c) => {
  return c.json({ message: 'Hello from Hono + Next.js!' })
})

export const GET = handle(app)
            `
              .trim()
              .split("\n")
              .map((line, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-neutral-500 w-8 text-right pr-10 select-none flex-shrink-0">
                    {String(index + 1).padStart(3, " ")}
                  </span>
                  <span className="whitespace-pre">{line}</span>
                </div>
              ))}
          </div>
        </pre>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Dock items={[{ icon: SiTypescript, label: "TypeScript" }, { icon: SiJavascript, label: "JavaScript" }, { icon: SiGo, label: "Go" }, { icon: SiPhp, label: "PHP" }]} />
      </div>
    </>
  )
}
