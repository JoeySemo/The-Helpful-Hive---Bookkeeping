import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                portal: {
                    honey: '#E2C16B',
                    charcoal: '#3C3C3C',
                    cream: '#FFF8E7',
                    sage: '#BFC8A1',
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
