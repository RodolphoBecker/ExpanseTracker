import MainContainer from "./Containers/MainContainer";
import { Title } from "./Titles/Titles";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const ProtectedRoutes = () => {
	const { auth } = useContext(AuthContext);

	const authHanddler = () => {
		switch (auth) {
			case true:
				return <Outlet />;

			case false:
				return <Navigate to="/auth" />;

			default:
				return (
					<MainContainer>
						<Title>Loading...</Title>
					</MainContainer>
				);
		}
	};

	return authHanddler(auth);
};

export default ProtectedRoutes;
