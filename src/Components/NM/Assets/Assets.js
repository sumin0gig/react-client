import React from 'react';
import { useSelector } from 'react-redux';
import AssetsCon from './AssetsCon';
import Chart from "react-apexcharts";

const Assets = ({titledata,ledgerdata}) => {
	let arr=[];
	const {getTed}=useSelector(state=>state);
	if(!titledata||!ledgerdata) return <div>no data</div>
	titledata.map(td=>td.title==="자산"?arr.push(td.desc):null)

	const nowYear= new Date().getFullYear();
	const now1= `${nowYear}0101`
	const now2= `${nowYear}0201`
	const now3= `${nowYear}0301`
	const now4= `${nowYear}0401`
	const now5= `${nowYear}0501`
	const now6= `${nowYear}0601`
	const now7= `${nowYear}0701`
	const now8= `${nowYear}0801`
	const now9= `${nowYear}0901`
	const now10= `${nowYear}1001`
	const now11= `${nowYear}1101`
	const now12= `${nowYear}1201`
	const next1= `${nowYear+1}0101`
	
	return (
		<div className='NMlist'>
				<div className='navCategory'>
					<h4>자산 증감</h4>
					<Chart 
						type="bar"
						series={[
							{
								name: "Price",
								data: getTed,
							},
						]}
						options={{
							chart: { height: 500, width: 500, toolbar: { show: true } },
							fill:{
								colors: [`var(--assest-color)`]									
							},
							plotOptions: {
								bar: {
									borderRadius: 10,
									dataLabels: {
										position: 'top', // top, center, bottom
									},
								}
							},
							dataLabels: {
								enabled: true,
								formatter: function (val) {
									return val.toLocaleString('ko-KR');
								},
								offsetY: -20,
								style: {
									fontSize: '12px',
								},
							},
							xaxis: {
								categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
								position: 'top',
								tooltip: {
									enabled: true,
								}
							},
						}}
					/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now1} end={now2} />
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now2} end={now3} />
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now3} end={now4}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now4} end={now5}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now5} end={now6}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now6} end={now7}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now7} end={now8}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now8} end={now9}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now9} end={now10}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now10} end={now11}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now11} end={now12}/>
					<AssetsCon arr={arr} ledgerdata={ledgerdata} start={now12} end={next1}/>
				</div>
		</div>
	);
};


export default Assets;