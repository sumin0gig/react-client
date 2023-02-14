import React from 'react';
import Title from '../../Title';

const FundsStateCon = ({where,titledata,ledgerdata}) => {
	let arr=[];
	let arrFixed=[];
	if(!titledata||!ledgerdata) return <div>no data</div>
	
	titledata.map(td=> td.isFixed==="N"
		? td.title===where?arr.push(td.desc):null
		: td.title===where?arrFixed.push(td.desc):null)


	const Calculator=(ad)=>{
		return(
			((
				ledgerdata.filter(ld=>ld.l_left===ad).map(v=>v.l_price).reduce((a,b)=>a+b,0)-
				ledgerdata.filter(ld=>ld.l_right===ad).map(v=>v.l_price).reduce((a,b)=>a+b,0)
			)*(
				where==="수익"||where==="부채"?-1:1
			))
		)
	}

	const sum= (arr.map(ad=>Calculator(ad))).reduce((a,b)=>a+b,0)
	const sumFixed= (arrFixed.map(ad=>Calculator(ad))).reduce((a,b)=>a+b,0)
	const totalSum= sum+sumFixed

	const totalList=(array)=>{
		return(
			array.map((ad,i)=>
			<div className='arrData' key={i}>
				<div className='arrDataText'>{ad}</div> 
				<div className='arrDataPrice'>
					{Calculator(ad).toLocaleString('ko-KR')}
				</div>
				<div className='arrDataPer'>
					({
					isNaN((Calculator(ad)/totalSum*100).toFixed(1))? "0.0": (Calculator(ad)/totalSum*100).toFixed(1)
					}%)
				</div>
			</div>)
		)
	}


		return (
		<div className='inner fundsstatelists'>
			<div className='funstatelist'>
				<Title comment={where}/>
				{!(arr.length+arrFixed.length)?
				<div className='announceFont'>입력된 계정과목이 없습니다.</div>:
					where==="비용"||where==="수익" 
					? <><div className='arrlist'><h5>유동{where}</h5> {totalList(arr)}</div>
						<div className='arrlist'><h5>고정{where}</h5> {totalList(arrFixed)}</div></>
					: totalList(arr)
				}
				
			</div>
			
				{where==="비용"||where==="수익" 
					? <div className='funstatelist fixed'><div className='width100'>
						<div className='arrData'>
							<div>유동{where} 계:</div> {sum.toLocaleString('ko-KR')} 원
							({isNaN((sum/totalSum*100).toFixed(1))? "0.0": (sum/totalSum*100).toFixed(1)}%)
						</div>
						<div className='arrData'>
							<div>고정{where} 계:</div> {sumFixed.toLocaleString('ko-KR')} 원
							({isNaN((sumFixed/totalSum*100).toFixed(1))? "0.0": (sumFixed/totalSum*100).toFixed(1)}%)
						</div>
						</div>
						<div className='arrData totalSum'>
							<div>계:</div>
							<div>{totalSum.toLocaleString('ko-KR')} 원</div>
						</div></div>

					
					:	<div className='arrData totalSum'><div>계:</div>
					<div>{totalSum.toLocaleString('ko-KR')} 원</div></div>}
			
		</div>
	);
};

export default FundsStateCon;