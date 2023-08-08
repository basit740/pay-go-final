/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				green: {
					primary: '#87C024',
				},
			},
			backgroundImage: {
				hero: "url('/public/imgs/bg-hero.jpeg')",
				stats: "url('/public/imgs/bg-stats.png')",
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
		},
	},
	plugins: [],
};

// ho jaey gi...

//
