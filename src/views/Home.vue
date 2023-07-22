<template>
    <div class="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content container mx-auto">
            <main class="mt-8 px-4 py-8 bg-base-200 rounded-md">
                <router-view></router-view>
            </main>
            <label
                for="my-drawer"
                class="btn btn-primary drawer-button lg:hidden fixed bottom-8 left-0"
            >
                Otwórz menu
            </label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 bg-base-300">
                <li v-for="link in menuLinks" :key="link.href">
                    <router-link
                        :to="link.href"
                        :exact-active-class="'bg-primary-focus text-white'"
                    >
                        {{ link.title }}
                    </router-link>
                </li>
                <li class="mt-auto">
                    <button
                        @click="logout"
                        class="btn text-white"
                        :class="{ loading: isLoading }"
                    >
                        Wyloguj
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import useLogoutMutation from '@/services/api/composables/useLogoutMutation';
import { router } from '@/router';

export default {
    name: 'HomeView',
    setup() {
        const { mutate: logout, isLoading } = useLogoutMutation();
        const menuLinks = [
            { href: '/dashboard', title: 'Strona główna' },
            { href: '/dashboard/handovers', title: 'Wydania produktów' },
        ];

        const handleLogout = () => {
            logout(undefined, {
                onSuccess() {
                    router.push('/');
                },
            });
        };

        return {
            logout: handleLogout,
            isLoading,
            menuLinks,
        };
    },
};
</script>
