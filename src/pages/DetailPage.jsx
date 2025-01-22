import React from "react";
import {
	archiveNote,
	deleteNote,
	getNote,
	unarchiveNote,
} from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NotFoundPage from "./NotFoundPage";
import DetailNote from "../components/DetailNote";

class DetailPage extends React.Component {
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
		const isFound = this.state.note;

		if (!isFound) {
			return <NotFoundPage />;
		}

		return (
			<DetailNote
				title={this.state.note.title}
				createdAt={this.state.note.createdAt}
				body={this.state.note.body}
				onArchive={this.onArchiveHandler}
				onUnArchive={this.onUnArchiveHandler}
				onDelete={this.onDeleteHandler}
				isArchived={this.state.note.archived}
			/>
		);
	}
}

function DetailPageWrapper() {
	const { id } = useParams();
	const navigate = useNavigate();

	return <DetailPage id={id} navigate={navigate} />;
}

DetailPage.propTypes = {
	id: PropTypes.string.isRequired,
	navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
