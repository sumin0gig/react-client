import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
	return (
		<>
			<div id='Menu' className='left'>	
				<div className='menulist '>
						<Link to={"/"}><button>현황</button></Link>
						<Link to={"/fundsstate"}><button>자금 현황</button></Link>
				</div>
			</div>
			<div id='Menu' className='right'>
				<div className='menulist'>
					<Link to={"/addaccounttitle"}><button>계정과목 등록</button></Link>
					<Link to={"/ledgerenter"}><button>작성하기</button></Link>
					<Link to={"/showAllLedger"}><button>작성 내역</button></Link>
				</div>
			</div>
		</>
	);
};

export default Menu;