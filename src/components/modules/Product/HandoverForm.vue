<template>
    <Form v-slot="{ meta }" :validation-schema="schema">
        <div class="mb-8">
            <FormInput name="quantity" placeholder="Ilość" type="number" />
        </div>
        <button
            class="btn w-full"
            :class="{
                'btn-disabled': !meta.valid,
            }"
        >
            Dodaj
        </button>
    </Form>
</template>

<script setup lang="ts">
const props = defineProps<{ maxQuantity: number }>();

import * as Yup from 'yup';
import { Form } from 'vee-validate';
import FormInput from '@components/views/Form/FormInput.vue';

const schema = Yup.object().shape({
    quantity: Yup.number()
        .required('Ilość jest wymagana')
        .integer('Ilość musi być liczbą całkowitą')
        .min(1, 'Ilość musi wynosić minimum 1')
        .max(
            props.maxQuantity,
            `Ilość może wynosić maksymalnie ${props.maxQuantity}`
        )
        .label('Ilość'),
});
</script>

<script lang="ts">
export default {
    name: 'HandoverForm',
};
</script>
