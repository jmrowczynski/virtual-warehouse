<template>
    <Teleport to="#modals">
        <div class="modal" :class="{ 'modal-open': isOpen }">
            <div class="modal-box relative" ref="modalBoxRef">
                <button
                    class="btn btn-sm btn-circle absolute right-2 top-2"
                    @click="onCloseModal"
                >
                    ✕
                </button>
                <h2 v-if="title" class="text-2xl font-bold mb-8">
                    {{ title }}
                </h2>
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

interface Props {
    title?: string;
    isOpen: boolean;
}

defineProps<Props>();

const modalBoxRef = ref(null);

const emit = defineEmits<{
    (e: 'onCloseModal'): void;
}>();

const onCloseModal = () => emit('onCloseModal');

onClickOutside(modalBoxRef, onCloseModal);
</script>

<script lang="ts">
export default {
    name: 'ModalView',
};
</script>
