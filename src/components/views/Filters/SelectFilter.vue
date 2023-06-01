<template>
    <div class="dropdown w-full">
        <label
            tabindex="0"
            class="input input-bordered w-full flex items-center cursor-pointer"
            :class="{ 'text-gray-400': !label }"
        >
            {{ label || placeholder }}
        </label>
        <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
            v-if="items.length"
        >
            <li :key="item.value" v-for="item in items">
                <button @click="() => onChange(item.value)" type="button">
                    {{ item.label }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
    placeholder: string;
    items: { label: string; value: string }[];
    defaultValue?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{ (e: 'onChange', value: string): void }>();

const activeValue = ref(props.defaultValue);

const onChange = (value: string) => {
    activeValue.value = value;
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
        activeElement.blur();
    }
    emit('onChange', value);
};

const label = computed(() => {
    const renderLabel = props.items.find(
        (item) => item.value === activeValue.value
    );
    return renderLabel ? renderLabel.label : '';
});
</script>
