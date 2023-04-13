<template>
    <span v-if="isLoading">Loading...</span>

    <div class="overflow-x-auto" v-else-if="!!data">
        <table class="table w-full mb-4">
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
        <div class="flex items-center justify-center">
            <PaginationWrapper
                :totalPages="data.last_page"
                :currentPage="params.page"
                @changePage="onChangePage"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import useProductsQuery from '@/services/api/composables/useProductsQuery';
import PaginationWrapper from '@components/Pagination.vue';
import { reactive } from 'vue';
import { IProductsParams } from '@/services/api/types/product';

const params = reactive<IProductsParams>({ page: 1 });
const { isLoading, data } = useProductsQuery(params);

const onChangePage = (page: number) => {
    params.page = page;
};
</script>
