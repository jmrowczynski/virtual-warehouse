import { defineStore } from 'pinia';
import { IUser } from '@/services/api/types/user';
import { StorageSerializers, useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: useLocalStorage<IUser | null>('user', null, {
                serializer: StorageSerializers.object,
            }),
            isLoggedIn: useLocalStorage('isLoggedIn', false),
        };
    },
    actions: {
        setUser(user: IUser) {
            this.user = user;
            this.isLoggedIn = true;
        },
        removeUser() {
            this.user = null;
            this.isLoggedIn = false;
        },
    },
});
