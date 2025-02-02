import React from "react";
import { login } from "../utils/network-data";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
	const { locale } = React.useContext(LocaleContext);

	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });

		if (!error) {
			loginSuccess(data);
		}
	}

	return (
		<section>
			<h2>{locale === "id" ? "Silahkan Login" : "Please Login"}</h2>
			<LoginInput login={onLogin} />
			<p>
				{locale === "id" ? "Belum punya akun?" : "Don't have account yet?"}{" "}
				<Link to="/register">
					{locale === "id" ? "Daftar disini." : "Register here."}
				</Link>
			</p>
		</section>
	);
}

LoginPage.propType = {
	loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
