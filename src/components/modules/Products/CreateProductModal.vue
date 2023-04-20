<template>
    <ModalView
        :isOpen="store.isCreateProductModalOpen"
        @onCloseModal="store.closeCreateProductModal()"
        title="Dodaj produkt"
    >
        <Form v-slot="{ meta }" :validation-schema="schema" @submit="onSubmit">
            <div class="mb-4">
                <FormInput name="name" placeholder="Nazwa" />
            </div>
            <div class="mb-4">
                <FormInput name="price" placeholder="Cena" type="number" />
            </div>
            <div class="mb-8">
                <FormInput name="quantity" placeholder="Ilość" type="number" />
            </div>
            <button
                class="btn w-full"
                :class="{
                    'btn-disabled': !meta.valid,
                    loading: isLoading,
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
import { Form, FormActions } from 'vee-validate';
import * as Yup from 'yup';
import useProductCreate from '@/services/api/composables/useProductCreate';
import { ICreateProductBody } from '@/services/api/types/product';
import { store } from '@components/modules/Products/store';

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

const { isLoading, mutate: createProduct } = useProductCreate();

const onSubmit = (
    values: ICreateProductBody,
    { resetForm }: FormActions<ICreateProductBody>
) => {
    createProduct(values, {
        onSuccess() {
            store.closeCreateProductModal();
            resetForm();
        },
    });
};
</script>

<script lang="ts">
export default {
    name: 'CreateProductModal',
};
</script>
