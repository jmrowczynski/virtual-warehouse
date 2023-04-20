<template>
    <ModalView :isOpen="isOpen" title="Dodaj produkt">
        <Form v-slot="{ meta }" :validation-schema="schema">
            <div class="mb-4">
                <FormInput name="name" placeholder="Nazwa" />
            </div>
            <div class="mb-4">
                <FormInput name="price" placeholder="Cena" />
            </div>
            <div class="mb-8">
                <FormInput name="quantity" placeholder="Ilość" />
            </div>
            <button
                class="btn w-full"
                :class="{
                    'btn-disabled': !meta.valid,
                }"
            >
                DODAJ
            </button>
        </Form>
    </ModalView>
</template>

<script setup lang="ts">
import ModalView from '@components/views/Modals/ModalView.vue';
import FormInput from '@components/views/Form/FormInput.vue';
import { Form } from 'vee-validate';
import * as Yup from 'yup';

defineProps<{ isOpen: boolean }>();

const schema = Yup.object().shape({
    name: Yup.string()
        .required('Nazwa jest wymagana')
        .min(2, 'Nazwa powinna zawierać conajmniej dwa znaki')
        .label('Nazwa'),
    price: Yup.number()
        .required('Cena jest wymagana')
        .moreThan(0, 'Cena musi być większa od 0')
        .label('Cena'),
    quantity: Yup.number()
        .required('Ilość jest wymagana')
        .integer('Ilość musi być liczbą całkowitą')
        .min(0, 'Ilość musi wynosić minimum 0')
        .label('Ilość'),
});
</script>

<script lang="ts">
export default {
    name: 'CreateProductModal',
};
</script>
