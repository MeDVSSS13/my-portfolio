module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mnBlue: "#3E517A",
				mnCyan: "#06b6d4",
				hvCyan: "#00D1FF",
				carolinaBlue: "#39A0ED",
				honeyYellow: "#F7B32B",
				forestGreen: "#6BA368",
				culturedWhite: "#F9F8F8",
				blueGrey: "#5885AF",
				midnightBlue: "#41729F",
				darkBlue: "#274472",
				babyBlue: "#C3E0E5",
				gainsboro: "#E2DED0",
				amber: {
					100: "#FFFBEB",
					200: "#FEF3C7",
					300: "#FDE68A",
					400: "#FCD34D",
					500: "#FBBF24",
					600: "#F59E0B",
					700: "#D97706",
					800: "#B45309",
					900: "#92400E",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
	],
};
