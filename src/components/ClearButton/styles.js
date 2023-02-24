import styled from 'styled-components';

export const ButtonContainer = styled.button`
	display: flex;
	justify-content: start;
	align-items: center;
	height: 71px;
	width: 100%;
	
	color: #FFFFFF;
	background-color: #454545;
	border: 1px solid #454545;

	font-size: 24px;
	font-weight: 700;
`

export const Button = styled.button`
	width: 25%;
	height: 50px;
	border: 2px solid #CDCDCD;
	background-color: #0099FF;
	color: #FFFFFF;
	font-size: 24px;
	font-weight: 700;
	border-radius: 20px;

	&:hover {
		opacity: 0.6;
	}
`