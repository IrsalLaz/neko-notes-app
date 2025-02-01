import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";

function RegisterPage() {
	const navigate = useNavigate();
	const { locale } = React.useContext(LocaleContext);

	async function onRegisterHandler(user) {
		const { error } = await register(user);

		if (!error) {
			navigate("/");
		}
	}

	return (
		<section>
			<h2>{locale === "id" ? "Silahkan Daftar" : "Please Register"}</h2>

			<RegisterInput register={onRegisterHandler} />

			<p>
				{locale === "id" ? "Sudah punya akun?" : "Already have an account?"}{" "}
				<Link to="/">Login</Link>
			</p>
		</section>
	);
}

export default RegisterPage;
