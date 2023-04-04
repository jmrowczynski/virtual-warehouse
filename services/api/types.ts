export interface IUser {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at: Date;
    updated_at: Date;
}

export interface IUserLoginResponse {
    user: IUser;
}

export interface IUserLoginRequest {
    email: string;
    password: string;
}
