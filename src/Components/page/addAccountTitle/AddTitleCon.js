import React, { useState } from 'react';
import { serveraddress } from '../../../App';
import axios from 'axios';
import Title from '../../Title';
import { useSelector } from 'react-redux';

const AddTitleCon = () => {

	const {titledata}=useSelector(state=>state.getDataReducer);
	let titleArr=[];
	!titledata ? <div>no data</div> : titledata.map(d=>titleArr.push(d.desc));

	const[formdata,setFormdata]=useState({
		title: "자산",
		desc: "",
		isFixed: "N"
	});

	const {title,desc}=formdata;

	const addtitle=()=>{
		console.log(titleArr.indexOf(formdata.desc));
		if(titleArr.indexOf(formdata.desc)>=0){
			alert("이름이 같은 계정과목이 있습니다.")
			setFormdata({...formdata, desc:""})
		}else{
			axios.post(`${serveraddress}addaccounttitle`,formdata)
			.then(res=>{
				alert("등록되었습니다!");
				window.location.reload()
				setFormdata({...formdata, desc:""})
			})
			.catch(e=>{console.log(e)})
		}
		
	}


	const onclick=(e)=>{
		setFormdata({
			...formdata,
			title:e.target.value
		});
	};
	const onchange=(e)=>{
		const {name,value}= e.target
		setFormdata({
			...formdata,
			[name]:value
		});

	};

	const onsubmit=(e)=>{
		e.preventDefault()
		formdata.desc&&addtitle()
	}
	return (
		<div className='inner'>
		<Title comment={"계정 과목"} notice={"돈의 분류를 선택 및 입력하세요."}/>
		<form method='post' onSubmit={onsubmit}>
			<b>항목명</b>
			<input onChange={onchange} value={desc} name='desc' required/>
			<b>종류</b>
			<input type='hidden' defaultValue={title} required/>
			<button value="자산" type='button' onClick={onclick} className={title==="자산"? "assestcolor":"btnOff"}>자산</button>
			<button value="부채" type='button' onClick={onclick} className={title==="부채"? "debtcolor":"btnOff"}>부채</button>
			<button value="수익" type='button' onClick={onclick} className={title==="수익"? "profitcolor":"btnOff"}>수익</button>
			<button value="비용" type='button' onClick={onclick} className={title==="비용"? "costcolor":"btnOff"}>비용</button>
			{(title==="수익"||title==="비용")?
			<>
			<b>특성</b>
			<select onChange={onchange} name="isFixed">
				<option value="N">유동적</option>
				<option value="Y">고정적</option>
			</select>
			</>:
			null
			}
			
			<button type='submit'>등록</button>
		</form>
		</div>
	);
};

export default AddTitleCon;