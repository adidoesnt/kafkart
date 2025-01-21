import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#e6e6e6",
					100: "#cccccc",
					200: "#b3b3b3",
					300: "#999999",
					400: "#808080",
					500: "#666666",
					600: "#4d4d4d",
					700: "#333333",
					800: "#1a1a1a",
					900: "#121212",
				},
				secondary: {
					50: "#e0f4ff",
					100: "#b3e1ff",
					200: "#80cfff",
					300: "#4dbdff",
					400: "#1aabff",
					500: "#0099fb",
					600: "#0085d9",
					700: "#0071b7",
					800: "#005d95",
					900: "#004973",
				},
				accent: {
					50: "#e0fffa",
					100: "#b3fff5",
					200: "#80ffef",
					300: "#4dffe9",
					400: "#1affe4",
					500: "#00f5d4",
					600: "#00d9b9",
					700: "#00b79c",
					800: "#00957f",
					900: "#007362",
				},
				neutral: {
					50: "#f5f5f5",
					100: "#ebebeb",
					200: "#e0e0e0",
					300: "#d6d6d6",
					400: "#cccccc",
					500: "#bfbfbf",
					600: "#a6a6a6",
					700: "#8c8c8c",
					800: "#737373",
					900: "#5a5a5a",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [animate],
};
