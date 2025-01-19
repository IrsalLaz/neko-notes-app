import React from "react";
import { getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import Searchbar from "../components/Searchbar";
import { useSearchParams } from "react-router-dom";

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getAllNotes(),
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
			<section className="homepage">
				<h1>Catatan Aktif 😺</h1>

				<Searchbar
					keyword={this.state.keyword}
					keywordChange={this.onKeywordChangeHandler}
				/>

				<NoteList notes={notes} />
			</section>
		);
	}
}

function HomePageWrapper() {
	const [searchParams, setSearchParams] = useSearchParams();

	const keyword = searchParams.get("keyword");

	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	console.log(keyword);
	return (
		<HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
	);
}

export default HomePageWrapper;
