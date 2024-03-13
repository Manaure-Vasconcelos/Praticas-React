import './style.css';
import PropTypes from 'prop-types';

const Input = ({ onChange, value, ...rest }) => <input onChange={onChange} value={value} {...rest} />;

Input.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	id: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	step: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
};

export default Input;
