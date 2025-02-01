import React from "react";
import { NoteItem, noteItemPropTypes } from "./NoteItem";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import LocaleContext from "../contexts/LocaleContext";

function NoteList({ notes }) {
	const { locale } = React.useContext(LocaleContext);

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
							createdAt={showFormattedDate(note.createdAt)}
							archived={note.archived}
						/>
					))}
				</section>
			) : (
				<p className="notes-list-empty">
					{locale === "id" ? "Tidak ada catatan😿" : "No note found😿"}
				</p>
			)}
		</>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NoteList;
