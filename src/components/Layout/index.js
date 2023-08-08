import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { Outlet } from 'react-router-dom';

const Index = ({ children }) => {
	return (
		<section>
			<Header />
			<Outlet />
			<Footer />
		</section>
	);
};

export default Index;
