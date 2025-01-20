import React from "react";
import { BsBoxArrowInDown, BsBoxArrowUp } from "react-icons/bs";

function ArchiveButton({ onArchive, isArchive }) {
	return (
		<button
			type="button"
			title="save"
			className="action"
			onClick={() => {
				onArchive();
			}}
		>
			{!isArchive ? <BsBoxArrowInDown /> : <BsBoxArrowUp />}
		</button>
	);
}

export default ArchiveButton;
