import { defineStore } from 'pinia';
import { IUser, IUserLoginRequest } from '@/services/api/types';
import AuthApi from '@/services/api/connections/AuthApi';
import { StorageSerializers, useLocalStorage } from '@vueuse/core';
import { router } from '@/router';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: useLocalStorage<IUser | null>('user', null, {
                serializer: StorageSerializers.object,
            }),
            isLoading: false,
            isLoggedIn: useLocalStorage('isLoggedIn', false),
            isLogoutLoading: false,
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
        async logout() {
            try {
                this.isLogoutLoading = true;
                await AuthApi.logout();
                this.user = null;
                this.isLoggedIn = false;
                await router.push('/');
            } catch {
                // TODO: use toast
                // eslint-disable-next-line no-console
                console.error('Logout failed');
            } finally {
                this.isLogoutLoading = false;
            }
        },
    },
});
