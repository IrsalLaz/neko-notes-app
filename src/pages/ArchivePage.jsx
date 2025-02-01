import React from "react";
import { getArchivedNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import NoteList from "../components/NoteList";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function ArchivePage() {
	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState("");
	const [searchParams, setSearchParams] = useSearchParams(() => {
		return searchParams.get("keyword") || "";
	});
	const { locale } = React.useContext(LocaleContext);

	React.useEffect(() => {
		getArchivedNotes().then(({ data }) => {
			setNotes(data);
		});
	}, [notes]);

	async function onKeywordChangeHandler(keyword) {
		setKeyword(keyword);
		setSearchParams(keyword);
	}

	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(keyword.toLowerCase());
	});

	return (
		<section className="archives-page">
			<h1>{locale === "id" ? "Catatan Arsip 😼" : "Archive Notes😼"}</h1>

			<Searchbar keyword={keyword} keywordChange={onKeywordChangeHandler} />

			<NoteList notes={notes} />
		</section>
	);
}

ArchivePage.propTypes = {
	defaultKeyword: PropTypes.string,
	keywordChange: PropTypes.func,
};

export default ArchivePage;
