import React from "react";
import { FiCheck } from "react-icons/fi";

function SubmitButton({ submitNote }) {
	return (
		<div className="add-new-page__action">
			<button
				type="button"
				title="save"
				className="action"
				onClick={() => {
					submitNote();
				}}
			>
				<FiCheck />
			</button>
		</div>
	);
}

export default SubmitButton;
