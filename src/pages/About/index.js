import React from 'react';
import { useTranslation } from 'react-i18next';
const Index = () => {
	const { t } = useTranslation();
	return (
		<section className='max-w-6xl w-full mx-auto'>
			<h1 className='text-5xl font-medium'> {t('about')}</h1>
		</section>
	);
};

export default Index;
