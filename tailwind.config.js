/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
    content: ['./index.html', './src/**/*.vue'],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: { themes: ['light', 'dark'] },
};
