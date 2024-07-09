import { render, screen } from "@testing-library/react"
import App from "./App"

<<<<<<< Updated upstream
test("renders home page", () => {
  render(<App />)
  expect(screen.getByText("Home")).toBeInTheDocument()
=======
test("renders learn react link", () => {
	render(<App />)
	const linkElement = screen.getByText(/j/i)
	expect(linkElement).toBeInTheDocument()
>>>>>>> Stashed changes
})

