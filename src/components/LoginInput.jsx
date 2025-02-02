import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

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
				placeholder="uzumaki@example.com"
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

LoginInput.propType = {
	login: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
};

export default LoginInput;
