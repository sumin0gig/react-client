import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../../modules/getTed';

const AssetsCon = ({arr,ledgerdata,start,end}) => {
	const dispatch = useDispatch();
	const Calculator=(ad)=>{
		return(
			ledgerdata.filter(ld=>ld.l_left===ad&& start<=ld.l_date && end >ld.l_date).map(v=>v.l_price).reduce((a,b)=>a+b,0)-
			ledgerdata.filter(ld=>ld.l_right===ad&& start<=ld.l_date && end >ld.l_date).map(v=>v.l_price).reduce((a,b)=>a+b,0)
		)
	}
	const aa = arr.map(ad=>Calculator(ad)).reduce((a,b)=>a+b,0)
	const {getTed}=useSelector(state=>state);
	
	if(getTed.length<12){
			dispatch(addData(aa))
	}

	return (
		<>
		</>
	);
};

export default AssetsCon;