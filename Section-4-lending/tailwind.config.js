/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		// screens: {
		// 	sm: "480px",
		// 	md: "768px",
		// 	lg: "976px",
		// 	xl: "1440px",
		// },
		container: {

			center: true
		},
		extend: {
			fontFamily: {
				Snter:  "sans-serif",
				Poppins: "sans-serif",
				Sen: "sans-serif",
				Inter: "sans-serif"
			},
			colors: {
				primary: "#FAF8ED",
				orange1: "#F66F4D",
				darkBlue: "#2E476B",
				darkGray: "#2D3134",
				semiGray: "#5B5F62",
				lightGray: "#9498A4",
				lightGray2: "#939597",
			},
		},

		
	},
	plugins: [],
};

