/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Ensure dark mode is enabled via class
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit Variable', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				// Paleta CRO optimizada
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6', // Azul principal para CTAs
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
				accent: {
					50: '#fdf4ff',
					100: '#fae8ff',
					200: '#f5d0fe',
					300: '#f0abfc',
					400: '#e879f9',
					500: '#d946ef', // Magenta para highlights
					600: '#c026d3',
					700: '#a21caf',
					800: '#86198f',
					900: '#701a75',
				},
				success: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e', // Verde para confirmaciones
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
				neutral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				}
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				}
			}
		}
	},
	plugins: [require('tailwindcss-dotted-background')]
}
