import { ButtonContainer } from './styles';

const Button = ({label, onClick, isFunction}) => {
	return (
		<ButtonContainer onClick={onClick} type="button" className={isFunction ? 'is-function' : ''}>
			{label}
		</ButtonContainer>
	);
}

export default Button;
