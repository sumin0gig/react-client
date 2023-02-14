import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShowAllLedgerCon from './ShowAllLedgerCon';
import { getLedger, getTitle } from '../../modules/getDataReducer';
import '../style/ShowAllLedger.css'

const ShowAllLedger = () => {
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getLedger())
		dispatch(getTitle())
	},[dispatch])
	return (
		<>
			<ShowAllLedgerCon/>
		</>
	);
};

export default ShowAllLedger;