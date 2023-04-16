<template>
    <input
        class="input input-bordered input-primary w-full"
        :type="type"
        :placeholder="placeholder"
        :aria-label="ariaLabel"
        :name="name"
        @input="onChange"
    />
</template>

<script setup lang="ts">
interface Props {
    type?: string;
    placeholder?: string;
    ariaLabel?: string;
    name: string;
}

const emit = defineEmits<{ (e: 'onChange', value: string): void }>();

withDefaults(defineProps<Props>(), {
    type: 'text',
});

const onChange = (event: InputEvent) => {
    emit('onChange', (event.target as HTMLInputElement).value);
};
</script>
