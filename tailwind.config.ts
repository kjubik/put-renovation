import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				secondary: {
					50: '#edfff6',
					100: '#d5ffed',
					200: '#aeffdb',
					300: '#70ffc0',
					400: '#2bfd9e',
					500: '#00ff8c',	// main green
					600: '#00c065',
					700: '#009652',
					800: '#067544',
					900: '#07603a',
					950: '#00371f',
				},
				primary: {
					50: '#f3f2ff',
					100: '#ebe7ff',
					200: '#d8d2ff',
					300: '#bcaeff',
					400: '#9a80ff',
					500: '#7b4cff',
					600: '#6b28ff',
					700: '#5e17eb',	// main purple
					800: '#4e12c5',
					900: '#4111a1',
					950: '#25076e',
				},
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
