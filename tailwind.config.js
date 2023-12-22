/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				/*score-background-colors */
				"light-red": "var(--light-red)",
				"light-orangey-yellow": "var(--light-orangey-yellow)",
				"light-green-teal": "var(--light-green-teal)",
				"light-lavender": "var(--light-lavender)",

				"cobalt-blue": "var(--cobalt-blue)",

				/*score-text-color*/
				"score-red": "var(--score-red)",
				"orangey-yellow": "var(--orangey-yellow)",
				"green-teal": "var(--green-teal)",
				"score-lavender": "var(--score-lavender)",

				"light-slate-blue": "var(--light-slate-blue)",
				"royal-blue": "var(--royal-blue)",
				"violet-blue": "var(--violet-blue)",


				"persian-blue": "var(--persian-blue)",
				"pale-blue": "var(--pale-blue)",
				"dark-gray-blue": "var(--dark-gray-blue)",

				"electric-violet": "var(--electric-violet)"
			},
		},
	},
	plugins: [],
};

