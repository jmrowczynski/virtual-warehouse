<template>
    <span v-if="isLoading">Loading...</span>

    <div class="overflow-x-auto" v-else-if="!!data">
        <table class="table w-full">
            <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                    <th>Wartość razem</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="item.id" v-for="item in data.data" class="hover">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import useProductsQuery from '@/services/api/composables/useProductsQuery';

const { isLoading, data } = useProductsQuery();
</script>
