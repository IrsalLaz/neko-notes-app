import React from "react";
import { getActiveNotes, getNote } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import Searchbar from "../components/Searchbar";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState("");
	const [searchParams, setSearchParams] = useSearchParams(() => {
		return searchParams.get("keyword") || "";
	});
	const { locale } = React.useContext(LocaleContext);

	React.useEffect(() => {
		getActiveNotes().then(({ data }) => {
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
		<section className="homepage">
			<h1>{locale === "id" ? "Catatan Aktif 😺" : "Active Notes😺"}</h1>

			<Searchbar keyword={keyword} keywordChange={onKeywordChangeHandler} />

			<NoteList notes={filteredNotes} />

			<div className="homepage__action">
				<Link to={"/notes/new"}>
					<button type="button" title="add" className="action">
						<BsPlus />
					</button>
				</Link>
			</div>
		</section>
	);
}

HomePage.propTypes = {
	defaultKeyword: PropTypes.string,
	keywordChange: PropTypes.func,
};

export default HomePage;
