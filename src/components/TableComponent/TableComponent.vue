<template>
    <table class="table w-full">
        <thead>
            <tr>
                <th :key="item" v-for="item in head">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>

<script setup lang="ts">
interface Props {
    head: string[];
}

defineProps<Props>();
</script>

<script lang="ts">
export default {
    name: 'TableComponent',
};
</script>
