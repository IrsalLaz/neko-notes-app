import React from "react";
import NoteItem from "./NoteItem";
import PropType from "prop-types";

function NoteList({ notes }) {
	if (notes.length === 0) {
		return <p className="notes-list-empty">Tidak ada catatan😿</p>;
	}

	return (
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
	);
}

NoteList.propTypes = {
	notes: PropType.array.isRequired,
};

export default NoteList;
