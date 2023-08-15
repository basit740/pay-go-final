import './App.css';

import Home from 'pages/Home';
import About from 'pages/About';
import ContactUs from 'pages/ContactUs';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<div className='app flex flex-col min-h-screen'>
				<Header />
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact-us' element={<ContactUs />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
