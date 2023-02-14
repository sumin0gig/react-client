import React, { useEffect } from 'react';
import AddLedgerCon from './AddLedgerCon';
import LedgerListCon from './LedgerListCon';
import '../style/LedgerList.css';
import '../style/AddLedgerCon.css';
import { useDispatch } from 'react-redux';
import { get10Ledger, getTitle } from '../../modules/getDataReducer';

const LedgerEnter = () => {
  const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(get10Ledger())
		dispatch(getTitle())
	},[dispatch])

	return (
		<>
			<AddLedgerCon/>
			<LedgerListCon/>
		</>

	);
};

export default LedgerEnter;