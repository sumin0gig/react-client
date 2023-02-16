import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { serveraddress } from '../../../App';
import { delTitle} from '../../modules/getDataReducer';

const TitleLi = ({d,title}) => {
	const dispatch= useDispatch();
	const [formdata,setFormdata]=useState({
		text:d.desc,
		fixed:d.isFixed==="N"?"N":"Y"
	})
	const ondelete=(desc,id)=>{
		if(id<5){
			alert("해당 과목은 삭제할 수 없습니다.")
		}else{
			axios.delete(`${serveraddress}addaccounttitleUpdate/${desc}`)
			dispatch(delTitle(desc))
			alert("삭제되었습니다.")
			window.location.reload()
		}
		
	}
	const onChange=(e)=>{
		const {name,value}=e.target;
		setFormdata({
			...formdata,
			[name]:value
		})
		console.log(formdata);
	}
	const onupdate=(id,desc)=>{
		axios.patch(`${serveraddress}addaccounttitleUpdate/${desc}`,formdata)
		axios.patch(`${serveraddress}addaccounttitle/${id}`,formdata)
		.then(res=>{
			alert("수정되었습니다.")
			window.location.reload()
		})
		.catch(e=>console.log(e))
	}
	const onSubmit=(e)=>{
		e.preventDefault();
	}
	return (
		<form onSubmit={onSubmit}>
			{d.title===`${title}`?
					<div className='titleitem' key={d.id}>
						<input value={formdata.text} onChange={onChange} name="text"/>
						{ title==="자산" || title==="부채"
							?null
							:<div className='fixes'> <div>유동 <input type={'radio'} value={"N"} onChange={onChange} name="fixed" checked={formdata.fixed==="N"? true : false}/></div>
							<div>고정 <input type={'radio'} value={"Y"} onChange={onChange} name="fixed" checked={formdata.fixed==="Y"? true : false}/></div></div>}
						<div className='btns'>
							<button onClick={()=>onupdate(d.id,d.desc)} className='nonebg'>M</button>
							<button onClick={()=>ondelete(d.desc,d.id)} className='nonebg'>X</button>
						</div>
					</div>
				:""
				}
		</form>
	);
};

export default TitleLi;