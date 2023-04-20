<template>
    <div class="mb-8 grid md:grid-cols-3 gap-2">
        <TableFilters />
    </div>

    <button class="btn text-white mb-4" @click="isModalOpen = true">
        Dodaj produkt
        <AddIcon width="20" height="20" class="ml-2" />
    </button>

    <div v-if="isLoading">Ładowanie...</div>

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
    <CreateProductModal
        :isOpen="isModalOpen"
        @onCloseModal="isModalOpen = false"
    />
</template>

<script setup lang="ts">
import useProductsQuery from '@/services/api/composables/useProductsQuery';
import PaginationWrapper from '@components/views/Pagination.vue';
import TableFilters from '@components/modules/Products/TableFilters.vue';
import { userProductsStore } from '@/stores/useProductsStore';
import TableView from '@components/modules/Products/TableView.vue';
import AddIcon from '@assets/icons/plus.svg';
import CreateProductModal from '@components/modules/Products/CreateProductModal.vue';
import { ref } from 'vue';

const productsStore = userProductsStore();
const { isLoading, data } = useProductsQuery(productsStore);

const isModalOpen = ref(false);

const onChangePage = (page: number) => {
    productsStore.setPage(page);
};
</script>
