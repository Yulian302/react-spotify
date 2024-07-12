import React from "react"
import TopLeft from "../components/home/TopLeft"

type RootProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootProps) => {
  return (
    <div className="h-[calc(100vh-7vh-1rem)]">
      <main className="h-full flex gap-2 [&>div:not(:first-child)]:rounded-md [&>div:not(:first-child)]:bg-main-dark m-2 text-white">
        <div className="basis-[15%] flex flex-col gap-2 [&>div]:bg-main-dark [&>div]:rounded-md">
          <div className="basis-[10%]">
            <TopLeft />
          </div>
          <div className="basis-[90%]">bottom left</div>
        </div>
        <div className="basis-[70%]">{children}</div>
        <div className="basis-[15%]">right panel</div>
      </main>
      <section className="text-white relative b-0 bg-black w-full h-[7vh]">
        player
      </section>
    </div>
  )
}

export default RootLayout
