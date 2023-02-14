import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLedgerDate } from '../../modules/getDataReducer';


const DateInputs = () => {
	const date= new Date();
	const [timedata,setTimedata]= useState({
		ot_year:date.getFullYear(),
		ot_month: (date.getMonth()+"").padStart(2,"0"),
		ot_date: (date.getDate()+"").padStart(2,"0"),
		t_year:date.getFullYear(),
		t_month: (date.getMonth()+1+"").padStart(2,"0"),
		t_date: (date.getDate()+"").padStart(2,"0"),
		
	})
	const {ot_year,ot_month,ot_date,t_year,t_month,t_date}=timedata;
	const onchange= (e)=>{
		const {name,value}= e.target
		setTimedata({
			...timedata,
			[name]: (value+"").padStart(2,"0"),
		})
	}
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getLedgerDate(
			(date.getFullYear()+""+(date.getMonth()+"").padStart(2,"0")+""+(date.getDate()+"").padStart(2,"0"))*1,
			(date.getFullYear()+""+(date.getMonth()+1+"").padStart(2,"0")+""+(date.getDate()+"").padStart(2,"0"))*1))
	},[dispatch])
	const onclick= ()=>{
		const	ol_date = (ot_year+""+ot_month+""+ot_date)*1
		const	l_date = (t_year+""+t_month+""+t_date)*1
		
		dispatch(getLedgerDate(ol_date,l_date))
		.then(res=>{
			alert("버튼 눌림!")
			console.log(`전송됨: ${ol_date} ~ ${l_date}`);
		})
		.catch(e=>alert(e))
	}
	return (
		<div className='dateinputs'>
			<div className='dateinput'>
					<input type='number' onChange={onchange} name='ot_year' min={1999} value={ot_year}/>
					<input type='number' onChange={onchange} name='ot_month' min={1} max={12} value={ot_month}/>
					<input type='number' onChange={onchange} name='ot_date' min={1} max={31} value={ot_date}/>
				</div>
				~
				<div className='dateinput'>
					<input type='number' onChange={onchange} name='t_year' min={1999} value={t_year}/>
					<input type='number' onChange={onchange} name='t_month' min={1} max={12} value={t_month}/>
					<input type='number' onChange={onchange} name='t_date' min={1} max={31} value={t_date}/>
				</div>
				<div className='datebtn'>
					<button onClick={onclick}>검색</button>
				</div>
		</div>
	);
};

export default DateInputs;