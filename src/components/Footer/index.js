import React from 'react';

const Index = () => {
	return (
		<footer className='mt-auto max-w-[1376px] w-full mx-auto py-8 bg-gray-950 text-white rounded-3xl h-36 mb-8'>
			<article className='max-w-6xl mx-auto w-full flex justify-between items-center'>
				<div className='flex flex-col gap-4'>
					<h3 className='text-green-primary text-xl font-semibold capitalize'>
						Company Address
					</h3>
					<p className='text-base text-gray-300 capitalize'>
						payGoCharge <br /> Bodinger consulting AB, Tomtebacken 4B
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h3 className='text-green-primary text-xl font-semibold capitalize'>
						Email
					</h3>
					<p className='text-base text-gray-300 capitalize'>
						ronnie@bodinger.com
					</p>
				</div>
			</article>
		</footer>
	);
};

export default Index;
