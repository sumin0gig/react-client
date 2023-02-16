import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ShowAllLedgerCon from './ShowAllLedgerCon';
import { getLedgerDate, getTitle } from '../../modules/getDataReducer';
import '../style/ShowAllLedger.css'

const ShowAllLedger = () => {
	const date= new Date();
	const dispatch= useDispatch();
	const ol_date= `${date.getFullYear()}${(date.getMonth()+"").padStart(2,"0")}${(date.getDate()+"").padStart(2,"0")}`;
	const l_date= `${date.getFullYear()}${(date.getMonth()+1+"").padStart(2,"0")}${(date.getDate()+"").padStart(2,"0")}`;
	useEffect(()=>{
		dispatch(getLedgerDate(ol_date,l_date))
		dispatch(getTitle())
	},[dispatch,ol_date,l_date])
	return (
		<>
			<ShowAllLedgerCon/>
		</>
	);
};

export default ShowAllLedger;