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
                        @click="() => handleRemoveClick(item)"
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
    <BasicModalView
        :isOpen="isModalOpen && !!activeItem"
        :title="`Usuwanie ${activeItem?.name}`"
        :description="`Czy na pewno chcesz usunąć <strong>${activeItem?.name}</strong>?`"
        :isLoading="isLoading"
        @onCloseModal="handleCloseModal"
        @onAccept="handleRemove"
    />
</template>

<script setup lang="ts">
import { IProduct, IProductsResponse } from '@/services/api/types/product';
import TableComponent from '@components/views/TableComponent.vue';
import TrashIcon from '@assets/icons/trash.svg';
import PencilIcon from '@assets/icons/pencil.svg';
import LinkIcon from '@assets/icons/link.svg';
import { ref } from 'vue';
import BasicModalView from '@components/views/Modals/BasicModalView.vue';
import useProductDelete from '@/services/api/composables/useProductDelete';

const isModalOpen = ref(false);
const activeItem = ref<IProduct | null>(null);

defineProps<{ data: IProductsResponse['data'] }>();

const { mutate: removeProduct, isLoading } = useProductDelete();

const handleRemoveClick = (value: IProduct) => {
    isModalOpen.value = true;
    activeItem.value = value;
};

const handleCloseModal = () => {
    isModalOpen.value = false;
};

const handleRemove = () => {
    if (activeItem.value) {
        removeProduct(activeItem.value.id, {
            onSuccess() {
                handleCloseModal();
            },
        });
    }
};
</script>

<script lang="ts">
export default {
    name: 'TableView',
};
</script>
