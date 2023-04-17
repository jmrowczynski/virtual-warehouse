<template>
    <TableComponent :head="['Nazwa', 'Cena', 'Ilość', 'Wartość razem']">
        <tr :key="item.id" v-for="item in data" class="hover">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
        </tr>
    </TableComponent>
</template>

<script setup lang="ts">
import { IProductsResponse } from '@/services/api/types/product';
import TableComponent from '@components/TableComponent/TableComponent.vue';

defineProps<{ data: IProductsResponse['data'] }>();
</script>

<script lang="ts">
export default {
    name: 'TableView',
};
</script>
