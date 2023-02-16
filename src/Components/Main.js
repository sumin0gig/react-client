import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLedger, getTitle } from './modules/getDataReducer';
import Assets from './NM/Assets/Assets';
import CostProfit from './NM/CostProfit/CostProfit';
import DateInputs from './page/fundsState/DateInputs';

const Main = () => {
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getLedger())
		dispatch(getTitle())
	},[dispatch])
	const {titledata,ledgerdata}= useSelector(state=>state.getDataReducer)

	return (
		<>
			<div className='inner'>
				<DateInputs/>
			</div>
			<Assets titledata={titledata} ledgerdata={ledgerdata}/>
			<CostProfit titledata={titledata} ledgerdata={ledgerdata}/>

		</>
	);
};

export default Main;