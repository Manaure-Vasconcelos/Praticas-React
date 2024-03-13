import { useState } from 'react';

import './style.css';

import Input from '../../utils/inputs/main';
import FormatNumber from '../../utils/formatNumber';

const Profit = () => {
	const [lucroValue, setLucroValue] = useState(0)

	const handleValueChange = (e) => {
        const value = Number(e.target.value);
		setLucroValue(value)
    }

	return (
		<div
			id='container--lucro'
			className='darkThemeBlocks'
		>
			<h2>Margem de lucro.</h2>
			<p>Escolha a margem de lucro do seu produto:</p>
			<Input
				onChange={handleValueChange}
				type={'range'}
				id={'rangeLucro'}
				className={'ranges rangeLucro'}
				value={lucroValue}
				step={5}
				min={0}
				max={100}
			/>
			<div className='divCusto'>
				<div
					id='divLucro'
					className='blockResult'
				>
					R$ {FormatNumber(lucroValue)}
				</div>
			</div>
		</div>
	);
}

export default Profit;
