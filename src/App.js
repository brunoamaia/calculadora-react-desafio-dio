
import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import { Body, Container, Content, Row } from './styles';

const App = () => {
	const [currentNumber, setCurrentNumber] = useState('0');
	const [firstNumber, setFirstNumber] = useState('0');
	const [operation, setOperation] = useState('');

	const handleOnClear = () => {
		setCurrentNumber('0')
		setFirstNumber('0')
		setOperation('')
	};
	
	const handleAddDot = (dot) => {
		if (currentNumber.includes('.'))
			return;
		
		setCurrentNumber(prev => `${prev}${dot}`)
	}

	const handleAddNumber = (num) => {
		setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
	}

	const handleAddFirstNumberAndOperation = (operation) => {
		setFirstNumber(String(currentNumber));
		setCurrentNumber('0')
		setOperation(operation)
	}

	const handleDivisionNumbers = () => {
		if(firstNumber === '0') {
			handleAddFirstNumberAndOperation('/')
		} else {
			const account = Number(firstNumber) / Number(currentNumber);
			setCurrentNumber(String(account))
			setOperation('')
		}
	}

	const handleMinusNumbers = () => {
		if(firstNumber === '0') {
			handleAddFirstNumberAndOperation('-')
		} else {
			const account = Number(firstNumber) - Number(currentNumber);
			setCurrentNumber(String(account))
			setOperation('')
		}
	}

	const handleMultiplyNumbers = () => {
		if(firstNumber === '0') {
			handleAddFirstNumberAndOperation('*')
		} else {
			const account = Number(firstNumber) * Number(currentNumber);
			setCurrentNumber(String(account))
			setOperation('')
		}
	}

	const handleSumNumbers = () => {
		if(firstNumber === '0') {
			handleAddFirstNumberAndOperation('+')
		} else {
			const account = Number(firstNumber) + Number(currentNumber);
			setCurrentNumber(String(account))
			setOperation('')
		}
	}

	const handleEquals = () => {
		if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
			switch(operation) {
				case '/':
					handleDivisionNumbers();
					break;
				case '-':
					handleMinusNumbers();
					break;
				case '*':
					handleMultiplyNumbers();
					break;
				case '+':
					handleSumNumbers();
					break;
				default: 
					break;
			}
		}
	}

	return (
		<Container>
			<Body>
				<Content>
					<Input value={currentNumber}/>
					<Row>
						<ClearButton label="C" onClick={handleOnClear}/>
					</Row>
					<Row>
						<Button label="7" onClick={() => handleAddNumber('7')}/>
						<Button label="8" onClick={() => handleAddNumber('8')}/>
						<Button label="9" onClick={() => handleAddNumber('9')}/>
						<Button label="/" onClick={handleDivisionNumbers} isFunction/>
					</Row>
					<Row>
						<Button label="4" onClick={() => handleAddNumber('4')}/>
						<Button label="5" onClick={() => handleAddNumber('5')}/>
						<Button label="6" onClick={() => handleAddNumber('6')}/>
						<Button label="x" onClick={handleMultiplyNumbers} isFunction/>
					</Row>
					<Row>
						<Button label="1" onClick={() => handleAddNumber('1')}/>
						<Button label="2" onClick={() => handleAddNumber('2')}/>
						<Button label="3" onClick={() => handleAddNumber('3')}/>
						<Button label="-" onClick={handleMinusNumbers} isFunction/>
					</Row>
					<Row>
						<Button label="." onClick={() => handleAddDot('.')}/>
						<Button label="0" onClick={() => handleAddNumber('0')}/>
						<Button label="=" onClick={handleEquals} isFunction/>
						<Button label="+" onClick={handleSumNumbers} isFunction/>
					</Row>
				</Content>
			</Body>
		</Container>
	);
}

export default App;
