/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontSize: {
        name: ["24px", "32px"],
        nav: ["40px", "40px"],
        paragraph: ["16px", "26px"],
        skills: ["32px", "40px"],
        projectTitle: ["24px", "32px"],
        builtBy: ["18px", "28px"],
        'nav-md': ["72px", "72px"],
        'paragraph-md': ["18px", "28px"],
        'skills-md': ["48px", "56px"],
        'nav-lg': ["88px", "88px"],   
        wrongInput: ["12px", "18px"], 
      },
      gridTemplateRows: {
        skills: "repeat(2,1fr)",
        project: "repeat(2,1fr)",
      },
      gridTemplateColumns: {
        skills: "repeat(auto-fit, minmax(300px, 1fr))",
        'skills-lg': "repeat(auto-fit, minmax(345px, 1fr))",
        project: "repeat(auto-fit, minmax(355px, 1fr))",
        'project-lg': "repeat(auto-fit, minmax(540px, 1fr))",
      },
      
    },
  },
  plugins: [],
};
