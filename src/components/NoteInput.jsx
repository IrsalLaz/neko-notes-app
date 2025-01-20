import React from "react";
import PropTypes from "prop-types";

function NoteInput({ onTitleChange, onBodyChange }) {
	return (
		<div className="add-new-page__input">
			<input
				className="add-new-page__input__title"
				type="text"
				onChange={onTitleChange}
				placeholder="Catatan saya"
			/>
			<div
				className="add-new-page__input__body"
				data-placeholder="Sebenarnya saya adalah ...."
				contentEditable
				onInput={onBodyChange}
			></div>
		</div>
	);
}

NoteInput.propTypes = {
	onTitleChange: PropTypes.func.isRequired,
	onBodyChange: PropTypes.func.isRequired,
};

export default NoteInput;
