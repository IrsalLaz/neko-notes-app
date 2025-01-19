import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteItem({ id, title, body, createdAt, archived }) {
	return (
		<article className="note-item">
			<h3 className="note-item__title">
				<Link to={`/notes/${id}`}>{title}</Link>
			</h3>
			<p className="note-item__createdAt">{createdAt}</p>
			<p className="note-item__body">{body}</p>
		</article>
	);
}

NoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
};

export default NoteItem;
