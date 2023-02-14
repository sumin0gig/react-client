import React from 'react';

const Title = ({comment}) => {
	const titleStyle={
		fontSize:"24px",
		fontWeight:"bold",
		paddingBottom:"var(--padding-default)",
		margin:"10px 0",
		borderBottom: "1px solid var(--middle-color)",
	};
	return (
		<div style={titleStyle}>
			{comment}
		</div>
	);
};

export default Title;