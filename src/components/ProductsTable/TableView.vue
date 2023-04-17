<template>
    <TableComponent
        :head="['Nazwa', 'Cena', 'Ilość', 'Wartość razem', 'Akcje']"
    >
        <tr :key="item.id" v-for="item in data" class="hover">
            <td>{{ item.name }}</td>
            <td>{{ item.price.toFixed(2) }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
                <div class="flex gap-2">
                    <button
                        class="text-error hover:text-opacity-80"
                        title="Usuń produkt"
                    >
                        <TrashIcon width="20" height="20" />
                    </button>
                    <button
                        class="text-accent hover:text-opacity-80"
                        title="Edytuj produkt"
                    >
                        <PencilIcon width="20" height="20" />
                    </button>
                    <button
                        class="text-info hover:text-opacity-80"
                        title="Szczegóły produktu"
                    >
                        <LinkIcon width="16" height="16" />
                    </button>
                </div>
            </td>
        </tr>
    </TableComponent>
</template>

<script setup lang="ts">
import { IProductsResponse } from '@/services/api/types/product';
import TableComponent from '@components/TableComponent/TableComponent.vue';
import TrashIcon from '@assets/icons/trash.svg';
import PencilIcon from '@assets/icons/pencil.svg';
import LinkIcon from '@assets/icons/link.svg';

defineProps<{ data: IProductsResponse['data'] }>();
</script>

<script lang="ts">
export default {
    name: 'TableView',
};
</script>
