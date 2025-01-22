import React from "react";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

function DetailNote({
	title,
	createdAt,
	body,
	onArchive,
	onUnArchive,
	onDelete,
	isArchived,
}) {
	return (
		<section className="detail-page">
			<h3 className="detail-page__title">{title}</h3>
			<p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
			<p className="detail-page__body">{body}</p>

			<div className="detail-page__action">
				{!isArchived ? (
					<ArchiveButton onArchive={onArchive} isArchive={isArchived} />
				) : (
					<ArchiveButton onArchive={onUnArchive} isArchive={isArchived} />
				)}
				<DeleteButton onDelete={onDelete} />
			</div>
		</section>
	);
}

DetailNote.propTypes = {
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	onArchive: PropTypes.func.isRequired,
	onUnArchive: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	isArchived: PropTypes.bool.isRequired,
};

export default DetailNote;
