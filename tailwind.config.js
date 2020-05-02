/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

View the full documentation at https://tailwindcss.com.

*/

/* eslint-disable global-require */
module.exports = {
	purge: [
		"./src/**/*.svelte",
		"./src/**/*.html",
	],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/ui"),
	],
};
