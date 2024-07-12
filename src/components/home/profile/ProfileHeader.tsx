import { useLocation } from "react-router"
import { useAppSelector } from "../../../redux/hooks"
import Bell from "../../svgs/Bell"
import BellVisited from "../../svgs/BellVisited"
import InstallApp from "../../svgs/InstallApp"
import avatar from "../../../assets/testAvatar.png"
import HistoryButtons from "../navigation/HistoryButtons"

type Props = {}

const ProfileHeader = (props: Props) => {
  const location = useLocation().pathname
  const user = useAppSelector((state) => state.user)
  return (
    <div className="basis-[30%] bg-gradient-to-b from-gray-400 to-gray-700 rounded-t-md flex flex-col justify-between">
      <div className="flex justify-between m-4">
        <HistoryButtons />
        <div className="[&>*]:rounded-full flex gap-2">
          {/* <HistoryButtons /> */}
          <div className="flex gap-1 items-center px-2 py-0 bg-gray-600">
            <InstallApp size={12} color={"white"} />
            <span className="font-bold text-xs">Install app</span>
          </div>
          <div className="bg-black p-2">
            {location === "/content-feed" ? (
              <BellVisited size={12} color={"white"} />
            ) : (
              <Bell size={12} color={"white"} />
            )}
          </div>
          <div className="bg-white rounded-full p-[1px] size-7">
            <img
              src={avatar}
              alt="avatar"
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>
      {/* profile info */}
      <div className="flex gap-2 m-3">
        <div className="bg-white rounded-full p-[1px] size-28">
          <img
            src={avatar}
            alt="avatar"
            className="object-contain rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs"> Profile</span>
          <span className="text-5xl font-extrabold">{user.username}</span>
          <span className="text-xs">29 public playlists 14 following</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
