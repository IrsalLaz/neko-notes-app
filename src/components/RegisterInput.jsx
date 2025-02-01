import React from "react";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

function RegisterInput({ register }) {
	const [name, setName] = useInput();
	const [email, setEmail] = useInput();
	const [password, setPassword] = useInput();
	const { locale } = React.useContext(LocaleContext);

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
				placeholder="uzumaki narto"
				value={name}
				onChange={setName}
			/>
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

			<button onClick={onSubmitHandler}>
				{locale === "id" ? "Daftar" : "Register"}
			</button>
		</div>
	);
}

export default RegisterInput;
