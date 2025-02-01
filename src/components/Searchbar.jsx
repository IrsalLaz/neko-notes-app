import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function Searchbar({ keyword, keywordChange }) {
	const { locale } = React.useContext(LocaleContext);

	return (
		<section className="search-bar">
			<input
				type="text"
				placeholder={
					locale === "id" ? "Cari nama catatan.." : "Search by name.."
				}
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
