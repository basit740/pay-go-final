import React, { useState } from 'react';

import Hero from 'components/Hero';
import Main from 'components/Main';
import Address from 'components/Address';
import Modal from 'components/Modal';
const Index = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<section>
			<article className='max-w-6xl mx-auto w-full'>
				{openModal && <Modal onCloseClick={(e) => setOpenModal(false)}></Modal>}
				<Hero />
				<Main onButtonClick={(e) => setOpenModal(true)} />
				<Address />
			</article>
		</section>
	);
};

export default Index;
