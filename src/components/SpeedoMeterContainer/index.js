import React from 'react';
import Speedometer from 'components/SpeedoMeter';
const Index = () => {
	return (
		<div className='bg-white p-4 rounded-2xl h-full flex flex-col gap-8'>
			<Speedometer />
			<h2 className='text-center text-3xl font-medium mt-[170px] tracking-wider'>
				Current Power: 7.5kW
				<br />
				<p>Max Power: 11km</p>
			</h2>
		</div>
	);
};

export default Index;
