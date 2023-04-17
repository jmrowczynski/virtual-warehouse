<template>
    <div class="mb-8 grid md:grid-cols-3 gap-2">
        <InputFilter name="name" placeholder="Nazwa" @onChange="onNameChange" />
        <InputFilter
            name="price_min"
            placeholder="Cena min"
            @onChange="onPriceMinChange"
            type="number"
        />
        <InputFilter
            name="price_max"
            placeholder="Cena max"
            @onChange="onPriceMaxChange"
            type="number"
        />
        <SelectFilter
            placeholder="Alfabetycznie"
            :items="[
                { label: 'Alfabetycznie', value: 'name' },
                { label: 'Ilość: od najmniejszej', value: 'quantity_min' },
                { label: 'Ilość: od największej', value: 'quantity_max' },
            ]"
            @onChange="onSortChange"
        />
    </div>

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
import InputFilter from '@components/Filters/InputFilter.vue';
import { useDebounceFn } from '@vueuse/core';
import SelectFilter from '@components/Filters/SelectFilter.vue';

const params = reactive<IProductsParams>({
    page: 1,
    name: '',
    price_min: undefined,
    price_max: undefined,
    order_by: 'name',
});
const { isLoading, data } = useProductsQuery(params);

const onChangePage = (page: number) => {
    params.page = page;
};

const onNameChange = useDebounceFn((value: IProductsParams['name']) => {
    params.name = value;
    params.page = 1;
}, 600);

const onPriceMinChange = useDebounceFn(
    (value: IProductsParams['price_min']) => {
        params.price_min = value;
        params.page = 1;
    },
    600
);

const onPriceMaxChange = useDebounceFn(
    (value: IProductsParams['price_max']) => {
        params.price_max = value;
        params.page = 1;
    },
    600
);

const onSortChange = (value: IProductsParams['order_by']) => {
    params.order_by = value;
};
</script>
