import React from "react";
import { BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";

function DeleteButton({ onDelete }) {
	return (
		<button
			type="button"
			title="delete"
			className="action"
			onClick={() => {
				onDelete();
			}}
		>
			<BsTrash />
		</button>
	);
}

DeleteButton.propTypes = {
	onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
