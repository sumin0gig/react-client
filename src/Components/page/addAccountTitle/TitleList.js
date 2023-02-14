import React from 'react';
import TitleLi from './TitleLi';

const TitleListPrint=({title,color,data})=>{

	if(!data||data==="ok")return <div>no data</div>
	return(
		<div className='titleList'>
			<h4 className={color}>{title}</h4>
				{data.map((d,i)=><TitleLi d={d} title={title} key={i}/>
				)}
	</div>
	)
}

const TitleList = ({data}) => {
	return (
		<>
		<TitleListPrint title="자산" color={"assestcolor"} data={data} />
		<TitleListPrint title="부채" color={"debtcolor"} data={data} />
		<TitleListPrint title="비용" color={"costcolor"} data={data} />
		<TitleListPrint title="수익" color={"profitcolor"} data={data} />
		</>
	);
};

export default TitleList;