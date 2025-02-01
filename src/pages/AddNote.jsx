import React from "react";
import NoteInput from "../components/NoteInput";
import SubmitButton from "../components/SubmitButton";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

class AddNote extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
		};

		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}
	onTitleChangeHandler(event) {
		this.setState(() => {
			return {
				title: event.target.value,
			};
		});
	}

	onBodyChangeHandler(event) {
		this.setState(() => {
			return {
				body: event.target.innerHTML,
			};
		});
	}

	onSubmitHandler() {
		addNote(this.state);

		this.props.navigate("/");
	}

	render() {
		return (
			<div className="add-new-page">
				<NoteInput
					onTitleChange={this.onTitleChangeHandler}
					onBodyChange={this.onBodyChangeHandler}
				/>
				<SubmitButton submitNote={this.onSubmitHandler} />
			</div>
		);
	}
}

function AddNoteWrapper() {
	const navigate = useNavigate();

	return <AddNote navigate={navigate} />;
}

AddNote.propTypes = {
	navigate: PropTypes.func.isRequired,
};

export default AddNoteWrapper;
