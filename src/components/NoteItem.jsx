import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

function NoteItem({ id, title, body, createdAt }) {
	return (
		<article className="note-item">
			<h3 className="note-item__title">
				<Link to={`/notes/${id}`}>{title}</Link>
			</h3>
			<p className="note-item__createdAt">{createdAt}</p>
			<p className="note-item__body">{parser(body)}</p>
		</article>
	);
}

const noteItemPropTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
};

NoteItem.propTypes = noteItemPropTypes;

export { NoteItem, noteItemPropTypes };
