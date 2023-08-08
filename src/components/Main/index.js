import React from 'react';

import ChargetStats from 'components/ChargerStats';
import SpeedoMeter from 'components/SpeedoMeter';
const Index = () => {
	return (
		<main className='h-[390px]  flex items-center gap-3 w-full justify-between p-4 rounded-3xl bg-neutral-400 mb-48'>
			<ChargetStats />
			<SpeedoMeter />
		</main>
	);
};

export default Index;
