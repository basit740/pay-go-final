import React from 'react';

const Index = ({ svg, itemText, classes }) => {
	return (
		<li className={`flex items-center gap-2 ${classes}`}>
			{svg}
			<p className='text-2xl text-white font-medium'>{itemText}</p>
		</li>
	);
};

export default Index;
