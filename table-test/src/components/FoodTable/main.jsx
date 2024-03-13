import { useCallback, useEffect, useState } from 'react';

import './style.css';

import setIngredient from '../../utils/addIngredient';
import IsValidInput from '../../utils/isValidInputForm';
import ClearInputs from '../../utils/clearInputs';
import CostRealPerIngredient from '../../utils/costRealPerIngredient';
import Input from '../../utils/inputs/main';
import Button from '../../utils/buttons/main';
import FormatNumber from '../../utils/formatNumber';

const FoodTable = () => {
	const [ingredientList, setIngredientList] = useState([]);
	const [totalCost, settotalCost] = useState(0);
	
	const addIngredient = useCallback(() => {
		const inputs = document.querySelectorAll('.inputForm');
		const isValid = IsValidInput(inputs);

		if (!isValid) return;

		const ingredient = setIngredient(inputs);

		const costRealPerIngredient = CostRealPerIngredient(ingredient);

		setIngredientList([...ingredientList, ingredient]);
		settotalCost(totalCost + costRealPerIngredient);

		ClearInputs(inputs);
	}, [ingredientList, totalCost]);

	const handleWindowEvent = useCallback((e) => {
		const el = e.target;
		const keyClick = e.key;

		if (el.classList.contains('btnAdd') || keyClick === 'Enter') {
			addIngredient();
		}
	},[addIngredient]);

	useEffect(() => {
		window.addEventListener('click', handleWindowEvent);
		window.addEventListener('keydown', handleWindowEvent);

		return () => {
			window.removeEventListener('click', handleWindowEvent);
			window.removeEventListener('keydown', handleWindowEvent);
		};
	}, [handleWindowEvent]);

	/* 	const handleValueChange = (e) => {
		const value = e.target.value;
		this.setState({ ingredient: value });
	}; */

	return (
		<div id='divTable'>
		<table id='foodTable'>
			<thead>
				<tr>
					<th className='headerTable'>
						<label htmlFor='ingredients'>Ingrediente:</label>
					</th>
					<th className='headerTable'>
						<label htmlFor='marketWeight'>Tamanho da embalagem: (g/mL)</label>
					</th>
					<th className='headerTable'>
						<label htmlFor='marketPrice'>Preço no mercado (R$)</label>
					</th>
					<th className='headerTable'>
						<label htmlFor='grossWeight'>Uso na receita: (g/mL)</label>
					</th>
					<th rowSpan='2' colSpan='2' id='thBtn'>
						<Button type={'button'} className={'btnAdd'} textButton={'add_circle'} />
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<Input type={'text'} id={'ingredients'} className={'inputForm'} />
					</td>
					<td>
						<Input type={'number'} id={'marketWeight'} className={'inputForm'} />
					</td>
					<td>
						<Input type={'number'} id={'marketPrice'} className={'inputForm'} />
					</td>
					<td>
						<Input type={'number'} id={'grossWeight'} className={'inputForm'} />
					</td>
				</tr>
			</tbody>
		</table>

		<div className='divCusto'>
			<div id='custoTot' className='blockResult'>
				R$ {FormatNumber(totalCost)}
			</div>
		</div>
	</div>
);
};

export default FoodTable;
