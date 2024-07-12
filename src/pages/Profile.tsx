import ProfileBody from "../components/home/profile/ProfileBody"
import ProfileHeader from "../components/home/profile/ProfileHeader"
import RootLayout from "./RootLayout"

type Props = {}

const Profile = (props: Props) => {
  return (
    <RootLayout>
      <div className="flex flex-col h-full">
        <ProfileHeader />
        <ProfileBody />
      </div>
    </RootLayout>
  )
}
export default Profile
