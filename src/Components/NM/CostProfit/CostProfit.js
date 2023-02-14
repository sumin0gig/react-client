import React from 'react';
import { Link } from 'react-router-dom';
import CostProfitCon from './CostProfitCon';

const CostProfit = ({titledata,ledgerdata}) => {
	return (
		<div className='NMlist'>
			<Link to="/fundsstate">
				<div className='navCategory'>
					<h4>비용 및 수익</h4>
					<div className='dataRow'>
						<CostProfitCon titledata={titledata} ledgerdata={ledgerdata} where={"비용"}></CostProfitCon>
						<CostProfitCon titledata={titledata} ledgerdata={ledgerdata} where={"수익"}></CostProfitCon>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CostProfit;