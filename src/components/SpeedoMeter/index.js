import React, { useEffect, useState } from 'react';
import './SpeedoMeter.css';
import SpeedometerSVGs from './SpeedoMeterSVGs.js';

const Speedometer = ({ chargerData }) => {
	const [currentRotationDegree, setCurrentRotationDegree] = useState(-190);

	const calculateEndDegree = (currentPower, maxPower) => {
		const percentage = currentPower / maxPower;
		return -190 + percentage * 169; // 169 is the range from -190 to -21
	};

	useEffect(() => {
		const endDegree = calculateEndDegree(
			chargerData.currentChargingPower,
			chargerData.maxChargingPower
		);

		const interval = setInterval(() => {
			setCurrentRotationDegree((prevDegree) => {
				const nextDegree = prevDegree + 1;
				if (nextDegree >= endDegree) {
					clearInterval(interval);
					return endDegree;
				}
				return nextDegree;
			});
		}, 22);

		return () => clearInterval(interval);
	}, [chargerData.currentChargingPower, chargerData.maxChargingPower]);

	return (
		<div className='speedometer-container'>
			<SpeedometerSVGs deg={currentRotationDegree} />
			<div className='arrow-container'>
				<div
					className='arrow-wrapper'
					style={{ transform: `rotate(${currentRotationDegree}deg)` }}
				>
					<div className='arrow'>
						<img
							src='/imgs/needle.png'
							alt='needle img'
							className='arrow-img'
						/>
					</div>
				</div>
			</div>
			<div className='bottom-hide'></div>
		</div>
	);
};

export default Speedometer;
