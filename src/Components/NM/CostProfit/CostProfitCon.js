import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CostProfitCon = ({where,titledata,ledgerdata}) => {
	let arr=[];
	let arrFixed=[];
	if(!titledata||!ledgerdata) return <div>no data</div>
		titledata.map(td=> td.isFixed==="N"
		? td.title===where?arr.push(td.desc):null
		: td.title===where?arrFixed.push(td.desc):null)
	const Calculator=(ad)=>{
		return(
			ledgerdata.filter(ld=>ld.l_left===ad).map(v=>v.l_price).reduce((a,b)=>a+b,0)-
			ledgerdata.filter(ld=>ld.l_right===ad).map(v=>v.l_price).reduce((a,b)=>a+b,0)
		)
	}
	const sum= (arr.map(ad=>Calculator(ad))).reduce((a,b)=>a+b,0)
	const sumFixed= (arrFixed.map(ad=>Calculator(ad))).reduce((a,b)=>a+b,0)
	const totalSum= sum+sumFixed
	const colorArr=where==="비용"?
	['var(--cost-color)','var(--cost-unfixed-color)', 'var(--cost-fixed-color)']:
	['var(--profit-color)','var(--profit-unfixed-color)', 'var(--profit-fixed-color)'];
	// pie 차트
	const donutData={
		series: [isNaN((totalSum/totalSum)*100)?0:(totalSum/totalSum)*100,
		isNaN((sumFixed/totalSum)*100)?0:(sumFixed/totalSum)*100,
		isNaN((sum/totalSum)*100)?0:(sum/totalSum)*100],
		options: {
			chart: {
				height: 150,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					offsetY: 0,
					startAngle: 0,
					endAngle: 270,
					hollow: {
						margin: 5,
						size: '30%',
						background: 'transparent',
						image: undefined,
					},
					dataLabels: {
						name: {
							show: false,
						},
						value: {
							show: false,
						}
					}
				}
			},
			colors: colorArr,
			labels: ['계','고정','유동'],
			legend: {
				show: true,
				floating: true,
				fontSize: '16px',
				position: 'left',
				offsetX: 0,
				offsetY: 2,
				labels: {
					useSeriesColors: true,
				},
				markers: {
					size: 0
				},
				formatter: function(seriesName, opts) {
					return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex].toFixed(1)+"%"
				},
				itemMargin: {
					vertical: 3
				}
			},
			responsive: [{
				breakpoint: 480,
				options: {
					legend: {
							show: false
					}
				}
			}]
		},
	};	


	return (
		<>
				<ReactApexChart
					options={donutData.options}
					series={donutData.series}
					type="radialBar" 
					height={300}
			/>
		</>
	);
};

export default CostProfitCon;