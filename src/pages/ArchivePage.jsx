import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import NoteList from "../components/NoteList";
import PropTypes from "prop-types";

class ArchivePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getArchivedNotes(),
			keyword: props.defaultKeyword || "",
		};

		this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
	}

	onKeywordChangeHandler(keyword) {
		this.setState(() => {
			return {
				keyword,
			};
		});

		this.props.keywordChange(keyword);
	}

	render() {
		const notes = this.state.notes.filter((note) => {
			return note.title
				.toLowerCase()
				.includes(this.state.keyword.toLowerCase());
		});

		return (
			<section className="archives-page">
				<h1>Catatan Arsip 😼</h1>

				<Searchbar
					keyword={this.state.keyword}
					keywordChange={this.onKeywordChangeHandler}
				/>

				<NoteList notes={notes} />
			</section>
		);
	}
}

function ArchivePageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get("keyword");

	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	return (
		<ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
	);
}

ArchivePage.propTypes = {
	defaultKeyword: PropTypes.string,
	keywordChange: PropTypes.func,
};

export default ArchivePageWrapper;
