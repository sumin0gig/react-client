import React from 'react';

const Title = ({comment,notice}) => {
	const titleStyle={
		paddingBottom:"10px",
		margin:"5px 0",
		borderBottom: "1px solid var(--middle-color)",
		display:"flex",
		alignItems: "flex-end",
		flexWrap:"wrap"
	};
	const commentStyle={
		fontSize:"24px",
		fontWeight:"bold",
	};
	const noticeStyle={
		fontSize:"14px",
		padding:"0 10px",
		color:"var(--shadow-color)"
	};
	return (
		<div style={titleStyle}>
			<div style={commentStyle}>
				{comment}
			</div>
			{notice?
			<div style={noticeStyle}>
				<i className="fa-solid fa-circle-exclamation"></i> {notice}
			</div>
			:null}
		</div>
	);
};

export default Title;