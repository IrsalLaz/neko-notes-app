import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function NoteInput({ onTitleChange, onBodyChange }) {
	const { locale } = React.useContext(LocaleContext);

	return (
		<div className="add-new-page__input">
			<input
				className="add-new-page__input__title"
				type="text"
				onChange={onTitleChange}
				placeholder={locale === "id" ? "Judulnya adalah.." : "The tittle is.."}
			/>
			<div
				className="add-new-page__input__body"
				data-placeholder={
					locale === "id" ? "Pada suatu hari.." : "Once upon a time.."
				}
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
