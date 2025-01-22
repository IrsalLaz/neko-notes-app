import React from "react";
import {
	archiveNote,
	deleteNote,
	getNote,
	unarchiveNote,
} from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

class DetailNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			note: getNote(props.id),
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
	}

	onDeleteHandler() {
		deleteNote(this.props.id);
		this.props.navigate("/");
	}

	onArchiveHandler() {
		archiveNote(this.props.id);
		this.props.navigate("/archives");
	}

	onUnArchiveHandler() {
		unarchiveNote(this.props.id);
		this.props.navigate("/");
	}

	render() {
		const isArchived = this.state.note.archived;

		return (
			<section className="detail-page">
				<h3 className="detail-page__title">{this.state.note.title}</h3>
				<p className="detail-page__createdAt">
					{showFormattedDate(this.state.note.createdAt)}
				</p>
				<p className="detail-page__body">{this.state.note.body}</p>

				<div className="detail-page__action">
					{!isArchived ? (
						<ArchiveButton
							onArchive={this.onArchiveHandler}
							isArchive={isArchived}
						/>
					) : (
						<ArchiveButton
							onArchive={this.onUnArchiveHandler}
							isArchive={isArchived}
						/>
					)}
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

DetailNote.propTypes = {
	id: PropTypes.string.isRequired,
	navigate: PropTypes.func.isRequired,
};

export default DetailNoteWrapper;
