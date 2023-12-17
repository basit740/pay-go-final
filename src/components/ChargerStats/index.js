import React, { useState } from 'react';

import StatsItem from 'components/StatsItem';
import CreditCardCoin from 'components/SVGs/CreditCardCoin';
import DollarMoneyNote from 'components/SVGs/DollarMoneyNote';
import EnergyElectricityThunder from 'components/SVGs/EnergyElectricityThunder';
import StatusMenu from 'components/SVGs/StatusMenu';

const Index = ({ onButtonClick, chargerData }) => {
	const [stats, setStats] = useState([
		{
			id: 1,
			itemText: `Status: ${chargerData?.status}`,
			svg: <StatusMenu />,
		},
		{
			id: 2,
			itemText: `Credits: ${chargerData?.credits}`,
			svg: <CreditCardCoin />,
		},
		{
			id: 3,
			itemText: chargerData?.priceFormated,
			svg: <DollarMoneyNote />,
		},
		{
			id: 4,
			itemText: `Remaining Energy: ${chargerData?.purchasedEnergy}`,
			svg: <EnergyElectricityThunder />,
		},
	]);

	return (
		<article className='self-start bg-stats h-full bg-no-repeat bg-cover object-cover bg-center rounded-2xl w-full py-10 px-8'>
			<ul className='flex list-none flex-col gap-4 mb-6'>
				{stats.map((item) => (
					<StatsItem
						svg={item.svg}
						itemText={item.itemText}
						classes='animate-moveDown duration-1000'
					/>
				))}
			</ul>
			<button
				onClick={onButtonClick}
				className='animate-moveUp rounded-full py-3 px-6 flex items-center justify-center cursor-pointer bg-[#87C024] text-white transition-all duration-300 hover:bg-[#7aad20]'
			>
				Buy Energy
			</button>
		</article>
	);
};

export default Index;
