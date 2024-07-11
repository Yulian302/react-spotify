import { Provider } from "react-redux"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { AuthenticationGuard } from "./auth/AuthenticationGuard"
import HomePage from "./pages/home/Home"
import store from "./redux/store"
import LoginPage from "./auth/LoginPage"
import RegisterPage from "./auth/RegisterPage"
import { AuthProvider } from "./auth/providers/Auth"
import HelloPage from "./pages/home/HelloPage"

function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route index element={<HomePage />} />
						<Route element={<AuthenticationGuard guardType="authenticated" />}>
							<Route path="hello" element={<HelloPage />} />
						</Route>
						<Route
							element={<AuthenticationGuard guardType="unauthenticated" />}
						>
							<Route path="login" element={<LoginPage />} />
						</Route>
						<Route
							element={<AuthenticationGuard guardType="unauthenticated" />}
						>
							<Route path="signup" element={<RegisterPage />}></Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</Provider>
	)
}

export default App
