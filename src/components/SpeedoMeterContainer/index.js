import React from 'react';
import Speedometer from 'components/SpeedoMeter';
const Index = ({ chargerData }) => {
	return (
		<div className='bg-white p-4 rounded-2xl h-full flex flex-col gap-8'>
			<Speedometer chargerData={chargerData} />
			<h2 className='text-center text-3xl font-medium mt-[170px] tracking-wider'>
				Current Power: {chargerData?.currentChargingPowerFormated}
				<br />
				<p>Max Power: {chargerData.maxChargingPowerFormated}</p>
			</h2>
		</div>
	);
};

export default Index;
