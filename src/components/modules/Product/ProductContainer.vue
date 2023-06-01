<template>
    <button @click="router.back()" class="link mb-4">Powrót</button>
    <div v-if="isLoading">Ładowanie...</div>
    <div v-else-if="data">
        <h1 class="text-4xl mb-8 font-semibold">Produkt: {{ data.name }}</h1>
        <p class="text-xl mb-4">Cena: {{ data.price }}</p>
        <p class="text-xl mb-8">Ilość: {{ data.quantity }}</p>
        <h2 class="text-2xl mb-4">Wydania produktu</h2>
        <button
            class="btn text-white mb-4"
            @click="handleCreateHandoverModalOpen"
        >
            Dodaj wydanie produktu
            <AddIcon width="20" height="20" class="ml-2" />
        </button>
        <div v-if="data.handovers">
            <TableComponent :head="['Użytkownik', 'Ilość', 'Data']">
                <tr :key="item.id" v-for="item in data.handovers" class="hover">
                    <td>{{ item.employee.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.updated_at.slice(0, 10) }}</td>
                </tr>
            </TableComponent>
        </div>
        <ModalView
            :isOpen="isCreateHandoverModalOpen"
            @onCloseModal="handleCreateHandoverModalClose"
            title="Utwórz wydanie produktu"
        >
            <HandoverForm :maxQuantity="data.quantity" />
        </ModalView>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import useProductQuery from '@/services/api/composables/useProductQuery';
import TableComponent from '@components/views/TableComponent.vue';
import AddIcon from '@assets/icons/plus.svg';
import { useSingleProductStore } from '@components/modules/Product/store';
import ModalView from '@components/views/Modals/ModalView.vue';
import HandoverForm from '@components/modules/Product/HandoverForm.vue';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const { isLoading, data } = useProductQuery(id);
const {
    isCreateHandoverModalOpen,
    handleCreateHandoverModalOpen,
    handleCreateHandoverModalClose,
} = useSingleProductStore();
</script>

<script lang="ts">
export default {
    name: 'ProductContainer',
};
</script>
