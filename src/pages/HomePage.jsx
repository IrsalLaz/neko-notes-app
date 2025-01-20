import React from "react";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import Searchbar from "../components/Searchbar";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getActiveNotes(),
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

				<div className="homepage__action">
					<Link to={"/notes/new"}>
						<button type="button" title="add" className="action">
							<FaPlus />
						</button>
					</Link>
				</div>
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

	return (
		<HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
	);
}

export default HomePageWrapper;
