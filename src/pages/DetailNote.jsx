import React from "react";
import { deleteNote, getNote } from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

class DetailNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			note: getNote(props.id),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
	}

	onDeleteHandler() {
		deleteNote(this.props.id);
		this.props.navigate("/");
	}

	render() {
		return (
			<section className="detail-page">
				<h3 className="detail-page__title">{this.state.note.title}</h3>
				<p className="detail-page__createdAt">{this.state.note.createdAt}</p>
				<p className="detail-page__body">{this.state.note.body}</p>
				<div className="detail-page__action">
					<DeleteButton onDelete={this.onDeleteHandler} />
				</div>
			</section>
		);
	}
}

function DetailNoteWrapper() {
	const { id } = useParams();
	const navigate = useNavigate();

	return <DetailNote id={id} navigate={navigate} />;
}

export default DetailNoteWrapper;
