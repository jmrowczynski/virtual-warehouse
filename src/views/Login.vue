<template>
    <section class="min-h-screen flex items-center justify-center flex-col">
        <div
            class="card w-full max-w-xl mx-auto bg-base-200/70 shadow-xl px-4 py-8 md:p-12"
        >
            <h1 class="text-4xl mb-8 text-center font-semibold">Magazyn</h1>
            <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ meta }"
            >
                <div class="mb-4">
                    <FormInput
                        type="email"
                        name="email"
                        placeholder="example@example.com"
                        ariaLabel="email"
                    />
                </div>
                <div class="mb-8">
                    <FormInput
                        type="password"
                        placeholder="Hasło"
                        ariaLabel="password"
                        name="password"
                    />
                </div>
                <button
                    class="btn w-full"
                    :class="{
                        'btn-disabled': !meta.valid,
                        loading: isLoading,
                    }"
                >
                    ZALOGUJ
                </button>
            </Form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import FormInput from '@components/FormInput.vue';
import { router } from '@/router';
import { IUserLoginRequest } from '@/services/api/types/user';
import useLoginMutation from '@/services/api/composables/useLoginMutation';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Nieprawidłowy email')
        .required('Email jest wymagany')
        .label('Email'),
    password: Yup.string().required('Hasło jest wymagane').label('Hasło'),
});

const { isLoading, mutate: login } = useLoginMutation();

const onSubmit = (values: IUserLoginRequest) => {
    login(values, {
        onSuccess() {
            router.push('/dashboard');
        },
    });
};
</script>

<script lang="ts">
export default {
    name: 'LoginView',
};
</script>
