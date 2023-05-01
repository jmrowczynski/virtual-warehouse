<template>
    <button @click="router.back()" class="link mb-4">Powrót</button>
    <div v-if="isLoading">Ładowanie...</div>
    <div v-else-if="data">
        <h1 class="text-4xl mb-8 font-semibold">
            {{ data.name }}
        </h1>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import useProductQuery from '@/services/api/composables/useProductQuery';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const { isLoading, data } = useProductQuery(id);
</script>

<script lang="ts">
export default {
    name: 'ProductContainer',
};
</script>
