import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import { useAuthStore } from '@/stores/useAuthStore';
import ProductsView from '@components/modules/Products/ProductsView.vue';
import ProductView from '@components/modules/Product/ProductView.vue';
import HandoversView from '@components/modules/Handovers/HandoversView.vue';

const routes = [
    { path: '/', component: Login },
    {
        path: '/dashboard',
        name: 'dashboard',
        components: {
            Home,
        },
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                name: 'home',
                component: ProductsView,
            },
            {
                path: 'products/:id',
                name: 'product',
                component: ProductView,
            },
            {
                path: 'handovers',
                name: 'handovers',
                component: HandoversView,
            },
        ],
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.path === '/' && authStore.isLoggedIn) {
        next('/dashboard');
    }
    if (to.meta.requiresAuth) {
        if (authStore.isLoggedIn) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});
