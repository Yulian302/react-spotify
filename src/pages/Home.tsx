import { useAppSelector } from "../redux/hooks"
import RootLayout from "./RootLayout"

const Home = () => {
  const user = useAppSelector((state) => state.user)
  return (
    <RootLayout>
      <span>center panel home</span>
    </RootLayout>
  )
}

export default Home
