import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delLedger, getLedgerDate } from '../../modules/getDataReducer';
import Title from '../../Title';


const ShowAllLedgerCon = () => {
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

	
	const ondelete=(id)=>{
		const	ol_date = (ot_year+""+ot_month+""+ot_date)*1;
		const	l_date = (t_year+""+t_month+""+t_date)*1;
		dispatch(delLedger(id))
		dispatch(getLedgerDate(ol_date,l_date))
		.then(res=>{
			alert("삭제되었습니다.")
		})
		.catch(e=>console.log(e))
	}
	const data= useSelector(state=>state.getDataReducer.ledgerdata);
	if(!data) return <div>No data</div>
	return (
		<div className='inner'>
			<Title comment={"작성 내역"} notice={"작성 내역은 최근 1달을 기본으로 보여줍니다."}/>
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
				
			{!data.length?
			<div className='announceFont'>입력된 거래가 없습니다.</div>:
			<div className='LedgerListForm'>
				{data.map((d,i)=><div className='LedgerList' key={i}>
					<div>
						<div className='date'>{(d.l_date+"").substr(0,4)}년 {(d.l_date+"").substr(4,2)}월 {(d.l_date+"").substr(6,2)}일</div>
						<div className='title'>{d.l_title}</div>
						<div className='ledger'>{d.l_left}</div> <div className='ledger'>{d.l_right}</div>
						<div className='price'>{d.l_price.toLocaleString('ko-KR')}원</div>
					</div>
					<button className='nonebg' onClick={()=>ondelete(d.id)}>X</button>
				</div>)}
			</div>
			}
			
		</div>
	);
};

export default ShowAllLedgerCon;