import React from "react";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";

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

SubmitButton.propTypes = {
	submitNote: PropTypes.func.isRequired,
};

export default SubmitButton;
