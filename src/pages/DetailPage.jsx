import React from "react";
import {
	archiveNote,
	deleteNote,
	getNote,
	unarchiveNote,
} from "../utils/network-data";
import { useNavigate, useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import DetailNote from "../components/DetailNote";
import LoadingContainer from "../components/LoadingContainer";

function DetailPage() {
	const [note, setNote] = React.useState("");
	const [initializing, setInitializing] = React.useState(true);
	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		getNote(id).then(({ data }) => {
			setNote(data);
			setInitializing(false);
		});
	}, []);

	const onDeleteHandler = () => {
		deleteNote(id);
		navigate("/");
	};

	const onArchiveHandler = () => {
		archiveNote(id);
		navigate("/archives");
	};

	const onUnArchiveHandler = () => {
		unarchiveNote(id);
		navigate("/");
	};

	if (initializing) {
		return <LoadingContainer />;
	}

	if (!note) {
		return <NotFoundPage />;
	}

	return (
		<DetailNote
			title={note.title}
			createdAt={note.createdAt}
			body={note.body}
			onArchive={onArchiveHandler}
			onUnArchive={onUnArchiveHandler}
			onDelete={onDeleteHandler}
			isArchived={note.archived}
		/>
	);
}

export default DetailPage;
