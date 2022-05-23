//Components
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import MainContainer from "./components/Containers/MainContainer";
//Pages
import Auth from "./pages/Auth";
import Home from "./pages/Home";
//Util
import { Routes, Route, Outlet } from "react-router-dom";
//React Query
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/config";
//Styles
import "./styles/App.scss";

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
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
										<span style={{ fontSize: "1.2rem" }}>
											404 page Not Found
										</span>
									</MainContainer>
								}
							/>
						</Route>
					</Routes>
				</PageContainer>
			</QueryClientProvider>
		</div>
	);
}

export default App;
