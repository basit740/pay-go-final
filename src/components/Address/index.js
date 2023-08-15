import React from 'react';
import Locate from 'components/SVGs/Locate';
const Index = () => {
	return (
		<article className='Address z-30 flex items-center gap-6 w-full justify-between rounded-3xl bg-neutral-200 mb-48 overflow-hidden'>
			<blockquote className='p-10 flex flex-col gap-8 w-1/2'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-4xl font-semibold capitalize'>Charger</h2>
					<p className='text-gray-400 text-2xl'>
						Jossivagen 49, 680 37 Salen, <br />
						Sweden
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h3 className='text-3xl font-semibold'>Support</h3>
					<p className='text-gray-400 text-2xl'>+46 70 861 8052</p>
				</div>
			</blockquote>

			<figure className='overflow-hidden h-[326px] w-1/2 object-cover bg-address py-24 px-48'>
				{/* <img src='imgs/locate.png' alt='locate' /> */}

				<Locate />
			</figure>
		</article>
	);
};

export default Index;