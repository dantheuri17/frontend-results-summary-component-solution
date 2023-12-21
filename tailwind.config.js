/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-red": "var(--light-red)",
				"orangey-yellow": "var(--orangey-yellow)",
				"green-teal": "var(--green-teal)",
				"light-slate-blue": "var(--light-slate-blue)",
				"light-royal-blue": "var(--light-royal-blue)",
				"violet-blue": "var(--violet-blue)",
				"persian-blue": "var(--persian-blue)",
				"pale-blue": "var(--pale-blue)",
				"light-lavender": "var(--light-lavender)",
				"dark-gray-blue": "var(--dark-gray-blue)",
			},
		},
	},
	plugins: [],
};

