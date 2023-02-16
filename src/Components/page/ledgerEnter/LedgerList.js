import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delLedger} from '../../modules/getDataReducer';
import Title from '../../Title';

const TitleList = ({data}) => {
	const dispatch=useDispatch();
	const ondelete=(id)=>{
		dispatch(delLedger(id))
		window.location.reload()
		.catch(e=>console.log(e))
	}
	const {titledata}=useSelector(state=>state.getDataReducer);
	if(!titledata)return <div>no data</div>
	const assetArr=[];
	const debitArr=[];
	const costArr=[];
	const profitArr=[];
	titledata.map(t=>t.title==="자산"?assetArr.push(t.desc):
	t.title==="부채"?debitArr.push(t.desc):
	t.title==="비용"?costArr.push(t.desc):
	profitArr.push(t.desc))

	return (
		<div className='inner'>
			<Title comment={"최근 입력된 거래"} notice={"최근 입력된 거래는 입력 순으로 10건만 표시됩니다."}/>
			{!data.length?
				<div className='announceFont'> 입력된 거래가 없습니다. </div>:
				<div>
				{data.map((d,i)=><div className='LedgerList' key={i}>
					<div>
						<div className='date'>{(d.l_date+"").substr(0,4)}년 {(d.l_date+"").substr(4,2)}월 {(d.l_date+"").substr(6,2)}일</div>
						<div className='title'>{d.l_title}</div>
						{assetArr.indexOf(d.l_left)>-1? <div className='ledger assestcolor'>{d.l_left}</div> :
						 debitArr.indexOf(d.l_left)>-1?<div className='ledger debitcolor'>{d.l_left}</div>:
						 costArr.indexOf(d.l_left)>-1?<div className='ledger costcolor'>{d.l_left}</div>:
						 <div className='ledger profitcolor'>{d.l_left}</div>}
						{assetArr.indexOf(d.l_right)>-1? <div className='ledger assestcolor'>{d.l_right}</div> :
						 debitArr.indexOf(d.l_right)>-1?<div className='ledger debitcolor'>{d.l_right}</div>:
						 costArr.indexOf(d.l_right)>-1?<div className='ledger costcolor'>{d.l_right}</div>:
						 <div className='ledger profitcolor'>{d.l_right}</div>}
						<div className='price'>{d.l_price.toLocaleString('ko-KR')}원</div>
					</div>
					<button className='nonebg' onClick={()=>ondelete(d.id)}>X</button>
				</div>)}
			</div>
			}
		</div>
	);
};

export default TitleList;