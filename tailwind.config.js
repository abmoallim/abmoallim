/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'class'], // Add this line to enable dark mode with the class strategy
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			hud: 'rgb(var(--hud) / <alpha-value>)',
  			hud2: 'rgb(var(--hud2) / <alpha-value>)',
  			ctp: {
  				base: '#1e1e2e',
  				mantle: '#181825',
  				crust: '#11111b',
  				text: '#cdd6f4',
  				subtext1: '#bac2de',
  				subtext0: '#a6adc8',
  				overlay2: '#9399b2',
  				overlay1: '#7f849c',
  				overlay0: '#6c7086',
  				surface2: '#585b70',
  				surface1: '#45475a',
  				surface0: '#313244',
  				mauve: '#cba6f7',
  				teal: '#94e2d5',
  				peach: '#fab387',
  				sky: '#89dceb',
  				sapphire: '#74c7ec',
  				lavender: '#b4befe',
  				green: '#a6e3a1',
  				red: '#f38ba8',
  				maroon: '#eba0ac',
  				yellow: '#f9e2af',
  				pink: '#f5c2e7',
  				flamingo: '#f2cdcd',
  				rosewater: '#f5e0dc',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
};
