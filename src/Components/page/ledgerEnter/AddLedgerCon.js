import React, { useState } from 'react';
import Title from '../../Title';
import TitleBtnList from './TitleBtnList';
import { useDispatch } from 'react-redux';
import { postLedger } from '../../modules/getDataReducer';

const AddLedgerCon = () => {
	const date = new Date();
	const [timedata,setTimedata]= useState({
		t_year:date.getFullYear(),
		t_month: (date.getMonth()+1+"").padStart(2,"0"),
		t_date: (date.getDate()+"").padStart(2,"0"),
		l_date:"",
		l_title:"",
		l_price:"",
		l_left:"현금",
		l_right:"현금",
		l_star:undefined,
	})
	const {t_year,t_month,t_date,l_title,l_price,l_left,l_right,l_star}=timedata
	const onchange=(e)=>{
		const {value,name}= e.target
		setTimedata({
			...timedata,
			[name]: value,
			l_date: t_year+""+t_month+""+t_date
		})
	}
	const onDateChange=(e)=>{
		const {value,name}= e.target
		setTimedata({
			...timedata,
			[name]: (value+"").padStart(2,"0"),
			l_date: t_year+""+t_month+""+t_date
		})
	}
	const dispatch=useDispatch()
	const onSubmit=(e)=>{
		e.preventDefault()
		dispatch(postLedger(timedata))
		window.location.reload()
		.catch(e=>{
			console.log(e);
		})

	}
	return (
		<div className='inner'>
			<Title comment={"거래 입력"}/>
			<form onSubmit={onSubmit} className='addLedger'>
			<div className='addStar'>
					<span className='lable'>만족</span>
					<select name='l_star' onChange={onchange} value={l_star}>
						<option value={undefined}></option>
						<option value={5}>★★★★★</option>
						<option value={4}>★★★★</option>
						<option value={3}>★★★</option>
						<option value={2}>★★</option>
						<option value={1}>★</option>
					</select>
				</div>
				<div className='addDate'>
					<span className='lable'>날짜</span>
					<div className='dateinput'>
						<input type='number' onChange={onchange} name='t_year' min={1999} value={t_year}/>
						<input type='number' onChange={onDateChange} name='t_month' min={1} max={12} value={t_month}/>
						<input type='number' onChange={onDateChange} name='t_date' min={1} max={31} value={t_date}/>
					</div>
				</div>
				<div className='addTitle'>
					<span className='lable'>품목</span>
					<input type='text' onChange={onchange} value={l_title} name='l_title' required/>
				</div>
				<div className='addPrice'>
					<span className='lable'>금액</span>
					<input type='number' onChange={onchange} value={l_price} name='l_price' step={1000} max={2147483647} required/>
				</div>
				{/* 차.대변에 관련 계정과목 list를 btn으로 출력하고 해당 btn 클릭시 그 값 입력되게*/}
				<div className='addLeft'>
					<span className='lable'>차변</span>
					<input onChange={onchange} value={l_left} name='l_left' type='hidden' />
					<TitleBtnList title={"자산"} color={"assestcolor"} onClick={onchange} name="l_left" value={l_left}/>
					<TitleBtnList title={"부채"} color={"debtcolor"} onClick={onchange} name="l_left" value={l_left}/>
					<TitleBtnList title={"비용"} color={"costcolor"} onClick={onchange} name="l_left" value={l_left}/>
				</div>
				<div className='addRight'>
					<span className='lable'>대변</span>
					<input onChange={onchange} value={l_right} name='l_right' type='hidden'/>
					<TitleBtnList title={"자산"} color={"assestcolor"} onClick={onchange} name="l_right" value={l_right}/>
					<TitleBtnList title={"부채"} color={"debtcolor"} onClick={onchange} name="l_right" value={l_right}/>
					<TitleBtnList title={"수익"} color={"profitcolor"} onClick={onchange} name="l_right" value={l_right}/>
				</div>
				{/* 주석 참고 */}
				<button type='submit' className='addBtn'>작성</button>
			</form>
		</div>
	);
};

export default AddLedgerCon;