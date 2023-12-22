import React from 'react';
import Speedometer from 'components/SpeedoMeter';
import { useTranslation } from 'react-i18next';
const Index = ({ chargerData }) => {
	const { t } = useTranslation();
	return (
		<div className='bg-white p-4 rounded-2xl h-full flex flex-col gap-8'>
			<Speedometer chargerData={chargerData} />
			<h2 className='text-center text-3xl font-medium mt-[170px] tracking-wider'>
				{t('current_power')}: {chargerData?.currentChargingPowerFormated}
				<br />
				<p>
					{t('max_power')}: {chargerData.maxChargingPowerFormated}
				</p>
			</h2>
		</div>
	);
};

export default Index;
