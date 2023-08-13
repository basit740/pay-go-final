import React, { useEffect, useState } from 'react';
import './SpeedoMeter.css'; // Make sure to import your CSS file

import SpeedometerSVGs from './SpeedoMeterSVGs.js';

const Speedometer = () => {
	const [currentRotationDegree, setCurrentRotationDegree] = useState(-190);
	// const [degreeIncrement, setDegreeIncrement] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRotationDegree((prevNumber) => {
				const newNumber = prevNumber + 1;
				if (newNumber === -21) {
					clearInterval(interval); // Stop the interval when the number reaches 10
				}

				return newNumber;
			});
		}, 50);

		return () => {
			clearInterval(interval);
		};
	}, []);
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