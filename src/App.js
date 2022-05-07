import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Auth from "./pages/Auth";
import Home from "./pages/Home"
import MainContainer from "./components/Containers/MainContainer";
import { Routes, Route, Outlet } from "react-router-dom";
import "./styles/App.scss";

function App() {
	return (
		<div className="App">
			<PageContainer optionClass={"pageContainer"}>
				<Navbar />
				<div className="mobileMenu">
					<MobileNavbar />
				</div>
				<Routes>
					<Route path="/auth" element={<Auth />} />
					{/* PROTECTED ROUTES */}
					<Route element={<Outlet />}>
						<Route path="/" element={<Home />} />
						<Route
							path="/*"
							element={
								<MainContainer>
									<span style={{ fontSize: "1.2rem" }}>404 page Not Found</span>
								</MainContainer>
							}
						/>
					</Route>
				</Routes>
			</PageContainer>
		</div>
	);
}

export default App;
