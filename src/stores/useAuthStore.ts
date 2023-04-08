import { defineStore } from 'pinia';
import { IUser, IUserLoginRequest } from '@/services/api/types';
import AuthApi from '@/services/api/connections/AuthApi';
import { StorageSerializers, useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: useLocalStorage<IUser | null>('user', null, {
                serializer: StorageSerializers.object,
            }),
            isLoading: false,
            isLoggedIn: useLocalStorage('isLoggedIn', false),
        };
    },
    actions: {
        async login(user: IUserLoginRequest) {
            this.isLoading = true;

            try {
                const userData = await AuthApi.login(user);
                this.user = userData.data.user;
                this.isLoggedIn = true;
            } catch {
                this.isLoggedIn = false;
            } finally {
                this.isLoading = false;
            }
        },
    },
});
