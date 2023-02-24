import { ButtonContainer, Button } from './styles';

const ClearButton = ({label, onClick}) => {
	return (
		<ButtonContainer>
			<Button onClick={onClick} type="button">
				{label}
			</Button>
		</ButtonContainer>
	);
}

export default ClearButton;
