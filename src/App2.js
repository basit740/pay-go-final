import './App.css';

import Home from 'pages/Home';
import About from 'pages/About';
import ContactUs from 'pages/ContactUs';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	const defaultChargerId = 1;

	return (
		<BrowserRouter>
			<div className='app flex flex-col min-h-screen'>
				<Header />
				<Routes>
					{/* Redirect from root to default language and charger */}
					<Route
						path='/'
						element={
							<Navigate to={`/en/chargers/${defaultChargerId}`} replace />
						}
					/>

					{/* Language-specific routes */}
					{['en', 'fr', 'ar'].map((lang) => (
						<Route
							key={lang}
							path={`/${lang}/*`}
							element={<LanguageRoutes lang={lang} />}
						/>
					))}
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

function LanguageRoutes({ lang }) {
	return (
		<Routes>
			{/* Define language-specific routes here */}
			<Route path={`chargers/:chargerId`} element={<Home lang={lang} />} />
			<Route path={`about`} element={<About lang={lang} />} />
			<Route path={`contact-us`} element={<ContactUs lang={lang} />} />
		</Routes>
	);
}

export default App;
