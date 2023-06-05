import React from "react";
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => {
	return (
		<label>
			Find contacts by name
			<input type="text" name="filter" value={value} onChange={onChange}/>
		</label>
	)
};

Filter.prototype = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}

export default Filter;