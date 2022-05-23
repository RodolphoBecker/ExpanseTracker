import styles from "../styles/authComponents/Auth.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";
import { useEffect, useState } from "react";
import { useLoginUser, useRegisterUser } from "../queries/user";

const Auth = () => {
	//LOGIN
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	//REGISTER
	const [regEmail, setRegEmail] = useState("");
	const [regPw, setRegPw] = useState("");

	let body = {
		email: email,
		password: pw,
	};

	let regBody = {
		email: regEmail,
		password: regPw,
	};

	const {
		mutate: loginHandler,
		isError: loginError,
		error: loginErr,
	} = useLoginUser();

	const {
		mutateAsync: registerHandler,
		isSuccess: registerSucc,
		isError: registerError,
		error: registerErr,
	} = useRegisterUser();

	return (
		<MainContainer>
			<form action="submit" onSubmit={(e) => e.preventDefault()}>
				<div className={styles.container}>
					<Title>Login</Title>
					<span>Email :</span>
					<input
						type="email"
						autoComplete="username"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<span>Password :</span>
					<input
						type="password"
						autoComplete="password"
						onChange={(e) => setPw(e.target.value)}
						value={pw}
					/>
					<button>Login Now</button>
				</div>
			</form>

			{/* REGISTER FORM */}
			<form
				className={styles.registerForm}
				action="submit"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className={styles.container}>
					<Title>Register</Title>
					<span>Email :</span>
					<input
						type="email"
						autoComplete="email"
						onChange={(e) => setRegEmail(e.target.value)}
						value={regEmail}
					/>
					<span>Password :</span>
					<input
						type="password"
						autoComplete="new-password"
						onChange={(e) => setRegPw(e.target.value)}
						value={regPw}
					/>
					<button
					onClick={() => registerHandler(regBody)}
					>Register Now</button>
				</div>
			</form>
		</MainContainer>
	);
};

export default Auth;
