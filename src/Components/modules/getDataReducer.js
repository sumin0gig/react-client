import axios from "axios";
import { serveraddress } from "../../App";

const DO_TITLE='addaccounttitle/DO_TITLE';
const DO_LEDGER='ledgerenter/DO_LEDGER';
const DO_10LEDGER='ledgerenter10/DO_10LEDGER';

const initialState={
	titledata: null,
	ledgerdata: null,
	ledger10data: null
}

export default function getDataReducer(state=initialState,action){
	switch (action.type) {
		case DO_TITLE:
			return { ...state, titledata: action.data};
		case DO_LEDGER:
			return { ...state, ledgerdata: action.data};
		case DO_10LEDGER:
			return { ...state, ledger10data: action.data};
		default:
			return state;
	}
}
// -----------------addaccounttitle-----------------

export const getTitle=()=> async dispatch=>{
	try{
		const response= await axios.get(`${serveraddress}addaccounttitle`);
		const data= response.data;
		dispatch({type:DO_TITLE, data:data})
	}
	catch(e){
		alert(e);
	}
}
export const delTitle=(title)=> async dispatch=>{
	try{
		const response= await axios.delete(`${serveraddress}addaccounttitle/${title}`);
		const data= response.data;
		dispatch({type:DO_TITLE, data:data})
	}
	catch(e){
		alert(e);
	}
}

// -----------------ledgerenter-----------------
export const getLedger=()=> async dispatch=>{
	try{
		const response= await axios.get(`${serveraddress}ledgerenter`);
		const data= response.data;
		dispatch({type:DO_LEDGER, data:data})
	}
	catch(e){
		alert(e)
	}
}
export const postLedger=(timedata)=> async dispatch=>{
	try{
		const response= await axios.post(`${serveraddress}ledgerenter`,timedata);
		const data= response.data;
		dispatch({type:DO_LEDGER, data:data})
	}
	catch(e){
		alert(e)
	}
}
export const delLedger= (id)=> async dispatch=>{
	try{
		const response= await axios.delete(`${serveraddress}ledgerenter/${id}`);
		const data= response.data;
		dispatch({type:DO_LEDGER, data:data})
	}
	catch(e){
		alert(e)
	}
}
export const updateLedger= (id)=> async dispatch=>{
	try{
		const response= await axios.update(`${serveraddress}ledgerenter/${id}`);
		const data= response.data;
		dispatch({type:DO_LEDGER, data:data})
	}
	catch(e){
		alert(e)
	}
}

export const get10Ledger=()=> async dispatch=>{
	try{
		const response= await axios.get(`${serveraddress}ledgerenter10/`);
		const data= response.data;
		dispatch({type:DO_10LEDGER, data:data})
	}
	catch(e){
		alert(e)
	}
}
export const getLedgerDate=(ol_date,l_date)=> async dispatch=>{
	try{
		const response= await axios.get(`${serveraddress}ledgerenterDate/${ol_date}/${l_date}`);
		const data= response.data;
		dispatch({type:DO_LEDGER, data:data})
	}
	catch(e){
		alert(e)
	}
}