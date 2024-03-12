/** @type {import('tailwindcss').Config} */

// const { nextui } = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
	],
	theme: {
		extend: {
			fontFamily: {
				customFont: ['"Poppins"'],
			},
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				blue: {
					50: "#e6f1fe",
					100: "#cce3fd",
					200: "#99c7fb",
					300: "#66aaf9",
					400: "#338ef7",
					500: "#006FEE",
					600: "#005bc4",
					700: "#004493",
					800: "#002e62",
					900: "#001731",
				},
				// .. rest of the colors
			},
			animation: {
				"meteor-effect": "meteor 5s linear infinite",
			},
			keyframes: {
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			prefix: "nextui", // prefix for themes variables
			addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: "light", // default theme from the themes object
			defaultExtendTheme: "light", // default theme to extend on custom themes
			layout: {}, // common layout tokens (applied to all themes)
			themes: {
				light: {
					layout: {}, // light theme layout tokens
					colors: {}, // light theme colors
				},
				dark: {
					layout: {}, // dark theme layout tokens
					colors: {}, // dark theme colors
				},
				// ... custom themes
			},
		}),
	],
};
