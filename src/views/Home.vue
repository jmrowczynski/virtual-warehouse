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
            <ul class="menu p-4 w-80 bg-base-300 text-base-content">
                <li>
                    <router-link to="/dashboard">Strona główna</router-link>
                </li>
                <li class="mt-auto">
                    <router-link to="/">Wyloguj</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
};
</script>
