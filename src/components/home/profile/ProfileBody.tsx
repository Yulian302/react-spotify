import { useAppSelector } from "../../../redux/hooks"

type Props = {}

const ProfileBody = (props: Props) => {
  const user = useAppSelector((state) => state.user)
  return (
    <div className="basis-[70%] bg-gradient-to-b from-gray-700/50 to-main-dark/0">
      Profile body
    </div>
  )
}

export default ProfileBody
