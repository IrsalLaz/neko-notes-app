import React from "react";
import { login } from "../utils/network-data";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";

function LoginPage({ loginSuccess }) {
	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });

		if (!error) {
			loginSuccess(data);
		}
	}

	return (
		<section>
			<h2>Silahkan Login</h2>
			<LoginInput login={onLogin} />
			<p>
				Belum punya akun? <Link to="/register">Daftar disini.</Link>
			</p>
		</section>
	);
}

export default LoginPage;
