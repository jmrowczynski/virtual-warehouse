export interface IEmployee {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
}

export interface Link {
    url?: string;
    label: string;
    active: boolean;
}

export interface IEmployeesResponse {
    current_page: number;
    data: IEmployee[];
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
