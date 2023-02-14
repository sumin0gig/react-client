import React from 'react';
import { useSelector } from 'react-redux';

const TitleBtnList = ({title,color,onClick,name,value}) => {
	const {titledata}= useSelector(state=>state.getDataReducer);
	if(!titledata) return <div>no data</div>
	return (
		<div className='titleBtns'>
			{titledata.map(d=> d.title===title?
				<button className={value===d.desc? color: "btnOff"}
				key={d.id} type="button"
				name={name} value={d.desc} onClick={onClick}>
				{d.desc}
				</button>:null)}
		</div>
	);
};

export default TitleBtnList;