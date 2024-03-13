import './style.css';

import FoodTable from '../FoodTable/main';
import BlockCostUnit from '../costUnit/main';
import BlockFixedCost from '../fixedCost/main';
import Profit from '../Profit/main';

const Table = () => {
	return (
		<div className='containerMain'>
			<FoodTable />
	
			<div className='containerTableCosts'>
				<BlockCostUnit />
				<BlockFixedCost />
				<Profit />
			</div>
		</div>
	);
}

export default Table;
