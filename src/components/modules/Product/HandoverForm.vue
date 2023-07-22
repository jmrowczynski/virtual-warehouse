<template>
    <div v-if="isLoading">Ładowanie...</div>
    <Form
        v-else-if="data"
        v-slot="{ meta, setFieldValue, isSubmitting }"
        :validation-schema="schema"
        @submit="onSubmit"
    >
        <div class="mb-8">
            <FormInput name="quantity" placeholder="Ilość" type="number" />
        </div>
        <div class="mb-8 w-full">
            <Field name="employee_id" v-slot="{ meta }">
                <div
                    :class="{
                        'outline outline-1 outline-error rounded-[0.5rem]':
                            meta.dirty && !meta.valid,
                    }"
                >
                    <SelectFilter
                        placeholder="Pracownik"
                        :items="employees"
                        @onChange="
                            (value) => {
                                setFieldValue('employee_id', value);
                            }
                        "
                    />
                </div>
            </Field>
        </div>
        <button
            class="btn w-full"
            :class="{
                'btn-disabled': !meta.valid,
                loading: isSubmitting,
            }"
        >
            Dodaj
        </button>
    </Form>
</template>

<script setup lang="ts">
import useEmployeesQuery from '@/services/api/composables/useEmployeesQuery';
import SelectFilter from '@components/views/Filters/SelectFilter.vue';
import * as Yup from 'yup';
import { Form, Field, FormActions } from 'vee-validate';
import FormInput from '@components/views/Form/FormInput.vue';
import { computed } from 'vue';
import useHandoverCreate from '@/services/api/composables/useHandoverCreate';
import { ICreateHandoverBody } from '@/services/api/types/handover';
import { IProduct } from '@/services/api/types/product';

const props = defineProps<{
    maxQuantity: number;
    product: IProduct;
    onSuccess: () => void;
}>();

const { mutate: createHandover } = useHandoverCreate();

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
    employee_id: Yup.number().required('Pracownik jest wymagany'),
});

const { data, isLoading } = useEmployeesQuery();

const employees = computed(() => {
    return data?.value?.data.map((employee) => ({
        label: employee.name,
        value: employee.id,
    }));
});

const onSubmit = (
    values: Omit<ICreateHandoverBody, 'product_id'>,
    { resetForm }: FormActions<ICreateHandoverBody>
) => {
    createHandover(
        {
            ...values,
            product_id: props.product.id,
            quantity: Number(values.quantity),
        },
        {
            onSuccess() {
                resetForm();
                props.onSuccess();
            },
        }
    );
};
</script>

<script lang="ts">
export default {
    name: 'HandoverForm',
};
</script>
