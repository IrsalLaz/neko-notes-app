import React from "react";
import { getNote } from "../utils/local-data";
import { useParams } from "react-router-dom";

class DetailNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			note: getNote(props.id),
		};
	}

	render() {
		return (
			<section className="detail-page">
				<h3 className="detail-page__title">{this.state.note.title}</h3>
				<p className="detail-page__createdAt">{this.state.note.createdAt}</p>
				<p className="detail-page__body">{this.state.note.body}</p>
			</section>
		);
	}
}

function DetailNoteWrapper() {
	const { id } = useParams();

	return <DetailNote id={id} />;
}

export default DetailNoteWrapper;
