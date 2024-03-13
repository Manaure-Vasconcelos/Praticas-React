import './style.css';

import Input from '../../utils/inputs/main';

const CostUnit = () => {
	return (
		<div id='custosUni' className='darkThemeBlocks'>
			<h2>Custo unitário:</h2>
			<p>
				<label htmlFor='inputUnit'>Rendimento:</label>
			</p>

			<Input type={'number'} id={'inputUnit'} className={'inputUnit restInputs'} placeholder={'Exemplo: 1 ou 20'} />

			<p>
				<label htmlFor='packetValue'>Embalagem:</label>
			</p>

			<Input type={'number'} id={'packetValue'} className={'inputPacket restInputs'} placeholder={'Exemplo: 1,00'} />

			<div className='divCusto'>
				<h2>O custo unitário do seu produto:</h2>
				<br />
				<div id='divCostUnit' className='blockResult'>
					R$ 0,00
				</div>
			</div>
		</div>
	);
};

export default CostUnit;
