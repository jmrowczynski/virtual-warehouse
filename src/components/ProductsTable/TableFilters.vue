<template>
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
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { IProductsParams } from '@/services/api/types/product';
import { userProductsStore } from '@/stores/useProductsStore';
import InputFilter from '@components/Filters/InputFilter.vue';
import SelectFilter from '@components/Filters/SelectFilter.vue';

const productsStore = userProductsStore();

const onNameChange = useDebounceFn((value: IProductsParams['name']) => {
    productsStore.setName(value);
    productsStore.setPage(1);
}, 600);

const onPriceMinChange = useDebounceFn(
    (value: IProductsParams['price_min']) => {
        productsStore.setPriceMin(value);
        productsStore.setPage(1);
    },
    600
);

const onPriceMaxChange = useDebounceFn(
    (value: IProductsParams['price_max']) => {
        productsStore.setPriceMax(value);
        productsStore.setPage(1);
    },
    600
);

const onSortChange = (value: IProductsParams['order_by']) => {
    productsStore.setOrderBy(value);
};
</script>

<style scoped></style>
