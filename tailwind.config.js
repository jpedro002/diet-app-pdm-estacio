/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./src/**/*.{ts,tsx,js,jsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				'roboto-regular': ['Roboto_400Regular', 'sans-serif'],
				'roboto-bold': ['Roboto_700Bold', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
