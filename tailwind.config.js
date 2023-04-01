/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
    content: ['./index.html', './src/**/*.vue'],
    theme: {
        container: {
            padding: '1rem',
        },
        extend: {},
    },
    plugins: [daisyui],
    daisyui: { themes: ['light', 'dark'] },
};
