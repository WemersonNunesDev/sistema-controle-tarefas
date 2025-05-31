/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screen: {
                'superwide': '1280px',
            },
        },
    },
    plugins: [],
}
