import React from 'react';
import { NavLink } from 'react-router-dom';
const Index = () => {
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
								to='/'
								className={({ isActive, isPending }) =>
									isPending
										? `pending ${defaultClasses}`
										: isActive
										? `text-green-primary ${defaultClasses}`
										: defaultClasses
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive, isPending }) =>
									isPending
										? `pending ${defaultClasses}`
										: isActive
										? `text-green-primary ${defaultClasses}`
										: defaultClasses
								}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/contact-us'
								className={({ isActive, isPending }) =>
									isPending
										? `pending ${defaultClasses}`
										: isActive
										? `text-green-primary ${defaultClasses}`
										: defaultClasses
								}
							>
								Contact Us
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Index;
