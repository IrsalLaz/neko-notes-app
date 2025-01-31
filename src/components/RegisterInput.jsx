import React from "react";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
	const [name, setName] = useInput();
	const [email, setEmail] = useInput();
	const [password, setPassword] = useInput();

	const onSubmitHandler = () => {
		register({
			name: name,
			email: email,
			password: password,
		});
	};

	return (
		<div className="input-register">
			<input
				type="text"
				name="name"
				placeholder="name"
				value={name}
				onChange={setName}
			/>
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

			<button onClick={onSubmitHandler}>Daftar</button>
		</div>
	);
}

export default RegisterInput;
