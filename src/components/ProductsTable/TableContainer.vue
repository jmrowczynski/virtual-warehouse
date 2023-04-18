<template>
    <div class="mb-8 grid md:grid-cols-3 gap-2">
        <TableFilters />
    </div>

    <button class="btn text-white mb-4">
        Dodaj produkt
        <AddIcon width="20" height="20" class="ml-2" />
    </button>

    <div v-if="isLoading">Loading...</div>

    <div class="overflow-x-auto" v-else-if="!!data">
        <div class="mb-4">
            <TableView :data="data.data" />
        </div>
        <div class="flex items-center justify-center">
            <PaginationWrapper
                :totalPages="data.last_page"
                :currentPage="productsStore.page"
                @changePage="onChangePage"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import useProductsQuery from '@/services/api/composables/useProductsQuery';
import PaginationWrapper from '@components/Pagination.vue';
import TableFilters from '@components/ProductsTable/TableFilters.vue';
import { userProductsStore } from '@/stores/useProductsStore';
import TableView from '@components/ProductsTable/TableView.vue';
import AddIcon from '@assets/icons/plus.svg';

const productsStore = userProductsStore();
const { isLoading, data } = useProductsQuery(productsStore);

const onChangePage = (page: number) => {
    productsStore.setPage(page);
};
</script>
