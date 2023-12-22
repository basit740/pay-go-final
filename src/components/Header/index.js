import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Index = () => {
	const { i18n, t } = useTranslation();
	const navigate = useNavigate();

	const handleLanguageChange = (event) => {
		i18n.changeLanguage(event.target.value);
		navigate(`/${event.target.value}${window.location.pathname.slice(3)}`);
	};
	const defaultClasses =
		'text-base font-medium transition-all duration-300 hover:text-green-primary';
	return (
		<header className='pt-6 mb-10'>
			<div className='max-w-6xl mx-auto w-full flex items-center justify-between'>
				<a href='/'>
					<img src='/imgs/logo.png' alt='Logo' />
				</a>
				<nav>
					<ul className='flex items-center gap-16'>
						<li>
							<NavLink
								to={`/${i18n.language}/chargers/1`}
								className={({ isActive }) =>
									isActive
										? `text-green-primary ${defaultClasses}`
										: defaultClasses
								}
							>
								{t('home')}{' '}
								{/* Assuming you have a translation key for 'home' */}
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/${i18n.language}/about`}
								className={({ isActive }) =>
									isActive
										? `text-green-primary ${defaultClasses}`
										: defaultClasses
								}
							>
								{t('about')}{' '}
								{/* Assuming you have a translation key for 'about' */}
							</NavLink>
						</li>
						<li>
							<NavLink
								to={`/${i18n.language}/contact-us`}
								className={({ isActive }) =>
									isActive
										? `text-green-primary ${defaultClasses}`
										: defaultClasses
								}
							>
								{t('contact_us')}{' '}
								{/* Assuming you have a translation key for 'contact_us' */}
							</NavLink>
						</li>

						<li>
							<select
								onChange={handleLanguageChange}
								value={i18n.language}
								className={`${defaultClasses} cursor-pointer`}
								style={{ appearance: 'none' }} // This can be adjusted or removed depending on your CSS setup
							>
								<option value='nothing' disabled selected>
									{t('select_lang')}
								</option>
								<option value='en'>EN</option>
								<option value='se'>SE</option>
								<option value='es'>ES</option>
								<option value='fr'>FR</option>
								{/* Add more languages as needed */}
							</select>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Index;
