export interface IProductsResponse {
    current_page: number;
    data: IProduct[];
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

export interface IProduct {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    price: number;
    quantity: number;
}

export interface Link {
    url?: string;
    label: string;
    active: boolean;
}

export interface IProductsParams {
    page?: number;
    name?: string;
    price_min?: number;
    price_max?: number;
    order_by?: 'name' | 'quantity_min' | 'quantity_max';
}
