import { GoChevronLeft, GoChevronRight } from "react-icons/go"

type Props = {}

const HistoryButtons = (props: Props) => {
  return (
    <div className="flex gap-2 [&>div]:p-[0.2rem] [&>div]:bg-main-dark [&>div]:rounded-full size-7">
      <div>
        <GoChevronLeft size={20} />
      </div>
      <div>
        <GoChevronRight size={20} />
      </div>
    </div>
  )
}

export default HistoryButtons
