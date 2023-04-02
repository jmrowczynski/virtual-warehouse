<template>
    <div>
        <div>
            <router-view name="Home"></router-view>
        </div>
        <main class="container mx-auto">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'MainLayout',
};
</script>
