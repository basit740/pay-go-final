import './App.css';
import React from 'react';
import Home from 'pages/Home';
import About from 'pages/About';
import ContactUs from 'pages/ContactUs';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
	const defaultChargerId = 1;

	return (
		<BrowserRouter>
			<I18nextProvider i18n={i18n}>
				<div className='app flex flex-col min-h-screen'>
					<Header />
					<Routes>
						{/* Redirect to default language and charger */}
						<Route
							path='/'
							element={
								<Navigate
									replace
									to={`/${i18n.language}/chargers/${defaultChargerId}`}
								/>
							}
						/>

						{/* Language-specific routes */}
						<Route path='/:lang/chargers/:chargerId' element={<Home />} />
						<Route path='/:lang/about' element={<About />} />
						<Route path='/:lang/contact-us' element={<ContactUs />} />
					</Routes>
					<Footer />
				</div>
			</I18nextProvider>
		</BrowserRouter>
	);
}

export default App;
