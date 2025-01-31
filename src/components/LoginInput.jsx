import React from "react";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
	const [email, setEmail] = useInput();
	const [password, setPassword] = useInput();

	const onSubmitHandler = () => {
		login({
			email: email,
			password: password,
		});
	};

	return (
		<div className="input-login">
			<input
				type="text"
				name="email"
				placeholder="email"
				value={email}
				onChange={setEmail}
			/>
			<input
				type="password"
				name="password"
				placeholder="password"
				value={password}
				onChange={setPassword}
			/>

			<button onClick={onSubmitHandler}>Login</button>
		</div>
	);
}

export default LoginInput;
