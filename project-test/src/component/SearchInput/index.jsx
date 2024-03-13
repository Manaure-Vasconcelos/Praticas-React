import './style.css';

import PropTypes from 'prop-types';

const SearchInput = ({ onChange, value, className, type, ...rest }) =>
	<input
		onChange={onChange}
		value={value}
		className={className}
		type={type}
		{...rest}
	/>;

SearchInput.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
};

export default SearchInput;
