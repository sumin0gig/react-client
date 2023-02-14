import React, { useEffect } from 'react';
import Title from '../../Title';
import FundsStateCon from './FundsStateCon';
import '../style/FundsState.css'
import { getLedger, getTitle} from '../../modules/getDataReducer';
import { useDispatch, useSelector } from 'react-redux';
import DateInputs from './DateInputs';

const FundsState = () => {
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getLedger())
		dispatch(getTitle())
	},[dispatch])
	const {titledata,ledgerdata}= useSelector(state=>state.getDataReducer);
	return (
		<>
			<Title comment="자금 현황"/>
			<div className='inner'>
				<DateInputs/>
			</div>
			<div className='fundsState'>
				<FundsStateCon where="자산" titledata={titledata} ledgerdata={ledgerdata}/>
				<FundsStateCon where="부채" titledata={titledata} ledgerdata={ledgerdata}/>
				<FundsStateCon where="비용" titledata={titledata} ledgerdata={ledgerdata}/>	
				<FundsStateCon where="수익" titledata={titledata} ledgerdata={ledgerdata}/>
			</div>
		</>
	);
};

export default FundsState;