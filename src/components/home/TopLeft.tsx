import classNames from "classnames"
import { useLocation } from "react-router"
import HomeIconVisited from "../svgs/HomeIconVisited"
import SearchIcon from "../svgs/SearchIcon"
import { Link } from "react-router-dom"
import HomeIcon from "../svgs/HomeIcon"
import SearchIconVisited from "../svgs/SearchIconVisited"

const TopLeft = () => {
  const location = useLocation().pathname
  console.log(location)
  const activeTab = (tab: string) =>
    classNames("font-[700] text-sm", {
      "text-white": location === tab,
      "text-gray-400": location !== tab,
    })
  return (
    <div className="flex flex-col h-full justify-center [&>div]:flex-1 gap-4 mx-4">
      <Link
        to={""}
        className="flex gap-4 [&>span]:hover:text-white [&>svg]:hover:!fill-white"
      >
        {location === "/" ? (
          <HomeIconVisited
            size={20}
            color={location === "/" ? "white" : "gray"}
          />
        ) : (
          <HomeIcon size={20} />
        )}
        <span className={activeTab("/")}>Home</span>
      </Link>
      <Link
        to={"search"}
        className="flex gap-4 [&>span]:hover:text-white [&>svg]:hover:!fill-white"
      >
        {location === "/search" ? (
          <SearchIconVisited size={20} />
        ) : (
          <SearchIcon
            size={20}
            color={location === "/search" ? "white" : "gray"}
          />
        )}
        <span className={activeTab("/search")}>Search</span>
      </Link>
    </div>
  )
}

export default TopLeft
