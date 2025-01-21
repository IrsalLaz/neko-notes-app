import React from "react";
import { NoteItem, noteItemPropTypes } from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
	return (
		<>
			{notes.length ? (
				<section className="notes-list">
					{notes.map((note) => (
						<NoteItem
							key={note.id}
							id={note.id}
							title={note.title}
							body={note.body}
							createdAt={note.createdAt}
							archived={note.archived}
						/>
					))}
				</section>
			) : (
				<p className="notes-list-empty">Tidak ada catatan😿</p>
			)}
		</>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NoteList;
