import { IEmployee } from '@/services/api/types/employee';
import { IProduct } from '@/services/api/types/product';

export interface IHandover {
    id: number;
    created_at: string;
    updated_at: string;
    quantity: number;
    employee_id: IEmployee['id'];
    product_id: IProduct['id'];
}

export interface IHandoversResponse {
    current_page: number;
    data: IHandover[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: any;
    to: number;
    total: number;
}

export interface Link {
    url?: string;
    label: string;
    active: boolean;
}

export interface ICreateHandoverBody {
    quantity: number;
    product_id: number;
    employee_id: number;
}
