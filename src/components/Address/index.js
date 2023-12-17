import React, { useState, useEffect } from 'react';
import Locate from 'components/SVGs/Locate';
import { useParams } from 'react-router-dom';
import { fetchChargerData } from 'services/chargerData';
// import MapContainer from 'components/MapContainer';
const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const Index = () => {
	const [chargerData, setChargerData] = useState();
	const { chargerId } = useParams();

	useEffect(() => {
		fetchChargerData(chargerId).then((data) => {
			console.log(data);
			setChargerData(data);
		});
	}, []);

	return (
		<article className='Address z-30 flex items-center gap-6 w-full justify-between rounded-3xl bg-neutral-200 mb-48 overflow-hidden'>
			<blockquote className='p-10 flex flex-col gap-8 w-1/2'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-4xl font-semibold capitalize'>Charger</h2>
					{chargerData ? (
						<p className='text-gray-400 text-2xl'>
							<span>{chargerData.adress}</span> <br />{' '}
							<span>{chargerData.postalCode}</span> {chargerData.city} <br />
							{chargerData.country}
						</p>
					) : (
						<p className='text-gray-400 text-2xl'>
							Jossivagen 49 <br /> 680 37 Salen <br />
							Sweden
						</p>
					)}
				</div>
				<div className='flex flex-col gap-4'>
					<h3 className='text-3xl font-semibold'>Support</h3>
					<p className='text-gray-400 text-2xl'>+46 70 861 8052</p>
				</div>
			</blockquote>

			<figure className='overflow-hidden h-[326px] w-1/2 object-cover bg-address py-24 px-48'>
				{/* <img src='imgs/locate.png' alt='locate' /> */}

				{/* {chargerData ? (
					<MapContainer
						latitude={chargerData.latitude}
						longitude={chargerData.longitude}
						apiKey={apiKey}
					/>
				) : (
					<Locate />
				)} */}
				<Locate />
			</figure>
		</article>
	);
};

export default Index;

//AIzaSyC9WsolVIwQrn2Kgpme3SayQBL1RGmjgYI
