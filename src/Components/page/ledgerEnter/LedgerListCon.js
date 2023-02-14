import React from 'react';
import { useSelector } from 'react-redux';
import LedgerList from './LedgerList'

const LedgerListCon = () => {
	const{ledger10data}= useSelector(state=>state.getDataReducer)
	if(!ledger10data)return <div>no data</div>
	return (
		<div>
			<LedgerList data={ledger10data}/>
		</div>
	);
};

export default LedgerListCon;