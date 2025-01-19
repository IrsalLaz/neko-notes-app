import React from "react";
import PropTypes from "prop-types";

function Searchbar({ keyword, keywordChange }) {
	return (
		<section className="search-bar">
			<input
				type="text"
				placeholder="Cari nama catatan.."
				value={keyword}
				onChange={(event) => keywordChange(event.target.value)}
			/>
		</section>
	);
}

Searchbar.propTypes = {
	keyword: PropTypes.string.isRequired,
	keywordChange: PropTypes.func.isRequired,
};

export default Searchbar;
