import React from "react";
import { BsBoxArrowInDown, BsBoxArrowUp } from "react-icons/bs";
import PropTypes from "prop-types";

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

ArchiveButton.propTypes = {
	onArchive: PropTypes.func.isRequired,
	isArchive: PropTypes.bool.isRequired,
};

export default ArchiveButton;
