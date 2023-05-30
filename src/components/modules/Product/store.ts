import { ref } from 'vue';

export const useSingleProductStore = () => {
    const isCreateHandoverModalOpen = ref(false);

    const handleCreateHandoverModalOpen = () => {
        isCreateHandoverModalOpen.value = true;
    };
    const handleCreateHandoverModalClose = () => {
        isCreateHandoverModalOpen.value = false;
    };

    return {
        isCreateHandoverModalOpen,
        handleCreateHandoverModalOpen,
        handleCreateHandoverModalClose,
    };
};
