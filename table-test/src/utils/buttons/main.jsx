import './style.css';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, textButton, ...rest }) => (
	<button className={className} onClick={onClick} {...rest}>
		<span className='material-icons'> {textButton} </span>
	</button>
);

Button.propTypes = {
	className: PropTypes.string,
    id: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
	textButton: PropTypes.string,
};

export default Button;
