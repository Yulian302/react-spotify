import TopLeft from "../components/home/TopLeft"
import { useAppSelector } from "../redux/hooks"

const Home = () => {
  const user = useAppSelector((state) => state.user)
  return (
    <div className="h-screen">
      <main className="h-full flex gap-2 [&>div:not(:first-child)]:rounded-md [&>div:not(:first-child)]:bg-main-dark m-2 text-white">
        <div className="basis-[17.5%] flex flex-col gap-2 [&>div]:bg-main-dark [&>div]:rounded-md">
          <div className="basis-[10%]">
            <TopLeft />
          </div>
          <div className="basis-[90%]">bottom left</div>
        </div>
        <div className="basis-[65%]">center panel</div>
        <div className="basis-[17.5%]">right panel</div>
      </main>
      <section className="relative b-0 bg-white w-full h-16">player</section>
    </div>
  )
}

export default Home
