import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', component: Login },
    {
        path: '/dashboard',
        name: 'dashboard',
        components: {
            Home,
        },
        children: [
            {
                path: '',
                component: {
                    template: '<div></div>',
                },
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
