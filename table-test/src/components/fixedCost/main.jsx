
import './style.css';

import Input from '../../utils/inputs/main';
import { useState } from 'react';

const FixedCost = () => {
	const [daysOfWork, setDaysOfWork] = useState(5)

	const handleValueChange = (e) => {
		const value = e.target.value;
		setDaysOfWork(value)
	};

	return (
		<div id='custosFixos' className='darkThemeBlocks'>
			<h2>Custos fixos mensais:</h2>
			<p>
				<label htmlFor='rangeDiasDeTrabalho'>Dias trabalhados:</label>
			</p>
			<Input type={'range'} id={'rangeDiasDeTrabalho'} className={'ranges rangeDiasDeTrabalho'} onChange={handleValueChange} value={daysOfWork} step={1} min={1} max={7} />
			<p>
				<label htmlFor='inputVendasPorDia'> Nº de vendas / dia: </label>
			</p>
			<input type='number' id='inputVendasPorDia' className='restInputs inputVendasPorDias' placeholder='Exemplo: 10,00' />
			<p>
				<label htmlFor='inputGastosFixos'>Gastos fixos:</label>
			</p>
			<input type='number' id='inputGastosFixos' className='restInputs inputGastosFixos' placeholder='Exemplo: 150,00' />
			<div className='divCusto'>
				<h2>O custo fixo do produto é:</h2>
				<p>O valor é referente ao gasto fixo por produto.</p>
				<div id='divCustoFixo' className='blockResult'>
					R$ 0,00
				</div>
			</div>
		</div>
	);
}

export default FixedCost;
