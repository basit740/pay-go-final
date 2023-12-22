import React from 'react';

import { useTranslation } from 'react-i18next';
const Index = () => {
	const { t } = useTranslation();
	return (
		<article className='capitalize px-24 py-20 mb-48 flex items-center justify-center overflow-hidden w-full object-cover bg-neutral-700 rounded-3xl h-96 bg-center bg-cover bg-no-repeat bg-blend-overlay bg-hero'>
			<h1 className='text-white text-5xl text-center font-medium leading-snug animate-text-main'>
				{t('welcome_to')}{' '}
				<span className='text-green-primary capitalize animate-text'>
					{t('pay_go_charge')}
				</span>{' '}
				, {t('welcome_remaining_message')}.
			</h1>
		</article>
	);
};

export default Index;
