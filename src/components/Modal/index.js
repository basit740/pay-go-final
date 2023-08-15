import React from 'react';

const Index = ({ children, onCloseClick }) => {
	return (
		<div className='Modal h-screen fixed top-0 left-0 bottom-0 right-0 w-screen bg-overlay z-50 flex justify-center items-center overflow-hidden'>
			<div className='Modal-Content max-w-sm w-full bg-white z-20  p-5 rounded-3xl animate-customBounce flex flex-col'>
				<div className='flex items-center justify-between'>
					<h2 className='font-extrabold text-lg'>Choose Payment Solution</h2>
					<button
						onClick={onCloseClick}
						className='w-6 h-6 bg-close cursor-pointer bg-no-repeat object-cover'
					></button>
				</div>
			</div>
		</div>
	);
};

export default Index;
