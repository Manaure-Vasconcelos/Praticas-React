import './style.css';

import PropTypes from 'prop-types';

const SearchInput = ({ onChange, value, className, type, testId, ...rest }) =>
	<input
		onChange={onChange}
		value={value}
		className={className}
		type={type}
		data-testid={testId}
		{...rest}
	/>;

SearchInput.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	testId: PropTypes.string
};

export default SearchInput;
