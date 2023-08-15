import React from 'react';

import ChargetStats from 'components/ChargerStats';
import SpeedoMeterContainer from 'components/SpeedoMeterContainer';
const Index = ({ onButtonClick }) => {
	return (
		<main className='h-[427px] z-30  flex items-center gap-6 w-full justify-between p-4 rounded-3xl bg-neutral-200 mb-48'>
			<div className='h-full  w-1/2'>
				<ChargetStats onButtonClick={onButtonClick} />
			</div>
			<div className='w-1/2 h-full'>
				<SpeedoMeterContainer />
			</div>
		</main>
	);
};

export default Index;
