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
                <h2 class="text-2xl font-bold mb-4">
                    {{ title }}
                </h2>
                <p class="mb-4" v-if="description" v-html="description"></p>
                <footer class="flex gap-2 justify-end">
                    <button
                        class="btn"
                        :class="{ 'btn-disabled': isLoading }"
                        @click="onCloseModal"
                    >
                        Nie
                    </button>
                    <button
                        class="btn btn-error"
                        :class="{ loading: isLoading }"
                        @click="onAccept"
                    >
                        Tak
                    </button>
                </footer>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

interface Props {
    title: string;
    description?: string;
    isOpen: boolean;
    isLoading: boolean;
}
defineProps<Props>();

const modalBoxRef = ref(null);

const emit = defineEmits<{
    (e: 'onCloseModal'): void;
    (e: 'onAccept'): void;
}>();

const onCloseModal = () => emit('onCloseModal');
const onAccept = () => emit('onAccept');

onClickOutside(modalBoxRef, onCloseModal);
</script>

<script lang="ts">
export default {
    name: 'BasicModalView',
};
</script>
