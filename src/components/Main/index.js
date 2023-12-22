import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChargetStats from 'components/ChargerStats';
import SpeedoMeterContainer from 'components/SpeedoMeterContainer';
import { fetchChargerData } from 'services/chargerData';

const Index = ({ onButtonClick }) => {
	const { chargerId } = useParams();
	

	const [chargerData, setChargerData] = useState(null);
	useEffect(() => {
		fetchChargerData(chargerId).then((data) => {
			console.log(data);
			setChargerData(data);
		});
	}, []);

	if (!chargerData) {
		return (
			<main className='h-[427px] z-30  flex items-center gap-6 w-full justify-between p-4 rounded-3xl bg-neutral-200 mb-48'>
				<div className='h-full  w-1/2'>
					{/* <ChargetStats chargerData={chargerData} onButtonClick={onButtonClick} /> */}
				</div>
				<div className='w-1/2 h-full'>
					{/* <SpeedoMeterContainer chargerData={chargerData} /> */}
				</div>
			</main>
		);
	}
	return (
		<main className='h-[427px] z-30  flex items-center gap-6 w-full justify-between p-4 rounded-3xl bg-neutral-200 mb-48'>
			<div className='h-full  w-1/2'>
				<ChargetStats chargerData={chargerData} onButtonClick={onButtonClick} />
			</div>
			<div className='w-1/2 h-full'>
				<SpeedoMeterContainer chargerData={chargerData} />
			</div>
		</main>
	);
};

export default Index;
