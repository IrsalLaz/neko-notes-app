import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";

function RegisterPage() {
	const navigate = useNavigate();

	async function onRegisterHandler(user) {
		const { error } = await register(user);

		if (!error) {
			navigate("/");
		}
	}

	return (
		<section>
			<h2>Silahkan daftar disini</h2>

			<RegisterInput register={onRegisterHandler} />

			<p>
				Kembali ke <Link to="/">Masuk</Link>
			</p>
		</section>
	);
}

export default RegisterPage;
