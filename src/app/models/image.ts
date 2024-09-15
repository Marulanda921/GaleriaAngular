export interface Image {
    id: string;
    alt_description: string;
    urls:{
        small: string;
        regular: string;
        thumb: string;
    };
    user:{
        name: string;
    }
    created_at: string;
    description?: string;
    favorite?: boolean;
}
