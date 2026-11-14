import type {
	ExpressiveCodeConfig,
	FeaturedLink,
	HomeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
	title: "June",
	subtitle: "Personal Website",
	lang: "ko", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "/assets/banner-sky.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
		{
			src: "/assets/favicon.png",
			sizes: "192x192",
		},
	],
};

export const homeConfig: HomeConfig = {
	introduction: "I'm a Ph.D. student at Seoul National University",
	researchFocus: "data models for the built environment",
	researchDescription:
		"with a particular focus on how information is represented, interpreted, and managed.",
	researchMethods:
		"formal language theory, artificial intelligence, and database systems",
	note: "Here, I share research notes, ideas, and insights gained along the way.",
	email: "sanjuah16@snu.ac.kr",
	lab: {
		name: "CEM Lab",
		url: "https://cem.snu.ac.kr/",
	},
	advisor: {
		name: "Changbum Ryan Ahn",
		url: "https://cbryanahn.github.io/",
	},
};

export const featuredLinks: FeaturedLink[] = [
	{
		name: "Blog",
		url: "/blog/",
		icon: "fa6-regular:pen-to-square",
		description: "Notes & thoughts",
	},
	{
		name: "CV",
		url: "/cv.pdf",
		external: true,
		icon: "fa6-regular:file-lines",
		description: "Curriculum vitae · PDF",
	},
	{
		name: "GitHub",
		url: "https://github.com/San-Juna-H",
		external: true, // Show an external link icon and will open in a new tab
		icon: "fa6-brands:github", // Visit https://icones.js.org/ for icon codes
		// You will need to install the corresponding icon set if it's not already included
		// `pnpm add @iconify-json/<icon-set-name>`
		description: "Code & projects",
	},
];

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "Home",
			url: "/", // Internal links should not include the base path, as it is automatically added
		},
		...featuredLinks,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/assets/profile.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "June Ji",
	bio: "Ph.D. Student · Seoul National University",
	links: featuredLinks.filter((link) => link.external),
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
