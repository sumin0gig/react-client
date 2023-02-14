import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTitleCon from './AddTitleCon';
import TitleListCon from './TitleListCon';
import { getTitle} from '../../modules/getDataReducer';
import '../style/TitleList.css'

const AddAccountTitle = () => {
  const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getTitle())
	},[dispatch])
	return (
		<>
			<div>
				<AddTitleCon/>
			</div>
			<div>
				<TitleListCon/>
				{/* 존재하는 계정과목 리스트 출력 axios.get */}
			</div>
		</>
	);
};

export default AddAccountTitle;