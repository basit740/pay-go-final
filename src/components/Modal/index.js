import React, { useState } from 'react';

const Index = ({ children, onCloseClick }) => {
	const [modalContentClasses, setmodalContentClasses] = useState(
		'Modal-Content max-w-sm w-full bg-white z-20  p-5 rounded-3xl animate-customBounce flex flex-col'
	);

	const handleClose = (e) => {
		setmodalContentClasses(
			'Modal-Content max-w-sm w-full bg-white z-20  p-5 rounded-3xl animate-customBounceOpposite flex flex-col'
		);
		setTimeout(onCloseClick, 200);
		// onCloseClick(e);
	};
	return (
		<div className='Modal h-screen fixed top-0 left-0 bottom-0 right-0 w-screen bg-overlay z-50 flex justify-center items-center overflow-hidden'>
			<div className={modalContentClasses}>
				<div className='flex items-center justify-between'>
					<h2 className='font-extrabold text-lg'>Choose Payment Solution</h2>

					<button
						onClick={handleClose}
						className='w-6 h-6 bg-close cursor-pointer bg-no-repeat object-cover'
					></button>
				</div>
			</div>
		</div>
	);
};

export default Index;
