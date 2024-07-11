import { useAppSelector } from "../../redux/hooks"

const HelloPage = () => {
	const user = useAppSelector((state) => state.user)
	return <div className="text-white">Hello, {user.username}</div>
}

export default HelloPage
