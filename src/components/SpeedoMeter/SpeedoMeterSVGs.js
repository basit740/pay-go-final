import React from 'react';

import './SpeedoMeter.css';
const SpeedometerSVGs = ({ deg }) => {
	return (
		<div>
			<svg
				className={`segment segment-1 ${
					deg > -192 && deg < -167 ? 'active-segment' : ''
				}`}
				width='72'
				height='71'
				viewBox='0 0 72 71'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* path for segment-1 */}
				<path
					d='M0 69.8959L61.2333 70.0181C61.8985 55.0372 65.3332 40.5316 71.1232 27.1256L16.0194 0.456055C6.33314 22.0211 0.733089 45.5682 0 69.8959Z'
					fill='#EE3C39'
				/>
			</svg>
			<svg
				className={`segment segment-2 ${
					deg > -167 && deg < -141 ? 'active-segment' : ''
				}`}
				width='84'
				height='83'
				viewBox='0 0 84 83'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* path for segment-2 */}
				<path
					d='M0.676758 55.858L55.7874 82.5275C62.7721 69.5695 72.0782 57.8944 83.2782 48.1538L45.1916 0.204346C26.7965 15.735 11.707 34.6935 0.676758 55.858Z'
					fill='#F37637'
				/>
			</svg>
			<svg
				className={`segment segment-3 ${
					deg > -141 && deg < -115 ? 'active-segment' : ''
				}`}
				width='79'
				height='80'
				viewBox='0 0 79 80'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* path for segment-3 */}
				<path
					d='M0.539062 31.5727L38.6257 79.5221C50.3008 71.0373 63.6593 64.5074 78.3278 60.5297L64.8201 0.816895C40.8861 6.94633 19.226 17.5693 0.539062 31.5727Z'
					fill='#F9A534'
				/>
			</svg>
			<svg
				className={`segment segment-4 ${
					deg > -115 && deg < -89 ? 'active-segment' : ''
				}`}
				width='72'
				height='64'
				viewBox='0 0 72 64'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* path for segment-4 */}
				<path
					d='M0.220703 3.46136L13.7285 63.1742C28.6821 60.4522 43.5544 60.5948 57.741 63.2285L71.4796 3.55639C48.5842 -1.03899 24.4601 -1.29693 0.220703 3.46136Z'
					fill='#FCD834'
				/>
			</svg>
			<svg
				className={`segment segment-5 ${
					deg > -89 && deg < -63 ? 'active-segment' : ''
				}`}
				width='79'
				height='80'
				viewBox='0 0 79 80'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* path for segment-5 */}
				<path
					d='M13.8714 0.959229L0.125977 60.6313C14.428 64.6022 27.8545 71.1321 39.74 79.8206L78.0032 32.0341C58.9429 17.6709 37.1538 7.05473 13.8714 0.959229Z'
					fill='#C3D84B'
				/>
			</svg>
			<svg
				className={`segment segment-6 ${
					deg > -63 && deg < -37 ? 'active-segment' : ''
				}`}
				width='83'
				height='83'
				viewBox='0 0 83 83'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* path for segment-6 */}
				<path
					d='M38.3314 0.686279L0.0683594 48.4728C11.0647 58.0844 20.4049 69.6984 27.4574 82.9348L82.6766 56.4689C71.5445 34.8292 56.36 15.9793 38.3314 0.686279Z'
					fill='#71BE46'
				/>
			</svg>
			<svg
				className={`segment segment-7 ${
					deg > -37 && deg < -21 ? 'active-segment' : ''
				}`}
				width='71'
				height='70'
				viewBox='0 0 71 70'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				{/* path for segment-7 */}
				<path
					d='M66.5128 34.0876C63.8248 22.1953 60.0304 10.8392 55.2789 0.0939941L0.0595703 26.5599C2.8969 33.2391 5.1844 40.2578 6.84063 47.5886C8.49687 54.9195 9.46079 62.2436 9.76624 69.4931L70.9995 69.6153C70.6737 57.8587 69.2076 45.9731 66.5128 34.0876Z'
					fill='#1BB04B'
				/>
			</svg>
		</div>
	);
};

export default SpeedometerSVGs;
