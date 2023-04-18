<template>
    <div class="btn-group">
        <button
            :key="page"
            v-for="page in totalPages"
            class="btn"
            :class="{ 'btn-active': page === currentPage }"
            @click="$emit('changePage', page)"
        >
            {{ page }}
        </button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    totalPages?: number;
    currentPage?: number;
    onChange?: (page: number) => void;
}

withDefaults(defineProps<Props>(), { totalPages: 0, currentPage: 1 });
</script>

<script lang="ts">
export default {
    name: 'PaginationWrapper',
};
</script>
