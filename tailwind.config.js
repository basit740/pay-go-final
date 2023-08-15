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
				address: 'url(/public/imgs/google-map.png)',
				close: 'url(/public/imgs/x.png)',
			},
			backgroundColor: {
				overlay: 'rgba(0,0,0,0.6)',
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
			},
			keyframes: {
				moveDown: {
					'0%': { transform: 'translateY(-5px)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '1', transform: 'translateY(0px)' },
				},
				moveUp: {
					'0%': { transform: 'translateY(5px)', opacity: '0' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '1', transform: 'translateY(0px)' },
				},
				customBounce: {
					'0%': { transform: 'translateY(40px)', opacity: '0' },
					'50%': { opacity: '0.5', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0px)' },
				},
				customBounceOpposite: {
					'0%': { transform: 'translateY(0px)', opacity: '1' },
					'50%': { opacity: '0.5', transform: 'translateY(20px)' },
					'100%': { opacity: '0', transform: 'translateY(40px)' },
				},
			},
			animation: {
				moveDown: 'moveDown 1s ease-in-out',
				moveUp: 'moveUp 1.5s ease-in-out',
				customBounce: 'customBounce .2s linear',
				customBounceOpposite: 'customBounceOpposite .2s linear',
			},
		},
	},
	plugins: [],
};
