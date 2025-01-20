import React from "react";
import { BsTrash } from "react-icons/bs";

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

export default DeleteButton;
