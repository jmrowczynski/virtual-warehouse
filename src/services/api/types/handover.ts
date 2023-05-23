import { IEmployee } from '@/services/api/types/employee';

export interface IHandover {
    id: number;
    created_at: string;
    updated_at: string;
    quantity: number;
    employee: IEmployee;
}
