<template>
    <section class="min-h-screen flex items-center justify-center flex-col">
        <div
            class="card w-full max-w-xl mx-auto bg-base-200/70 shadow-xl px-4 py-8 md:p-12"
        >
            <h1 class="text-4xl mb-8 text-center font-semibold">Warehouse</h1>
            <div>
                <div class="mb-4">
                    <input
                        type="email"
                        placeholder="example@example.com"
                        class="input input-bordered input-primary w-full"
                        aria-label="email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        class="input input-bordered input-primary w-full"
                        aria-label="password"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'LoginView',
};
</script>
