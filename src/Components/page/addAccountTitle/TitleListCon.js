import React from 'react';
import { useSelector } from 'react-redux';
import TitleList from './TitleList';
import Title from '../../Title';

const TitleListCon = () => {
	const {titledata}= useSelector(state=>state.getDataReducer);
	if(!titledata) return <div>No data</div>
	return (
		<div className='inner'>
			<Title comment={"계정 과목 수정"}/>
			<div className='titleLists'>
			<TitleList data={titledata}/>
			</div>
		</div>
	);
};

export default TitleListCon;