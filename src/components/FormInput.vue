<template>
    <Field
        class="input input-bordered input-primary w-full"
        :type="type"
        :placeholder="placeholder"
        :aria-label="ariaLabel"
        :name="name"
    />
    <ErrorMessage :name="name" class="text-error inline-block mt-1" />
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate';

interface Props {
    type?: string;
    placeholder?: string;
    ariaLabel?: string;
    name: string;
}

withDefaults(defineProps<Props>(), {
    type: 'text',
});
</script>

<script lang="ts">
export default {
    name: 'FormInput',
};
</script>
