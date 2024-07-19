// lib/types.ts
export interface Product {
    name: string;
    type: string;
    colors: string[];
    images: { [color: string]: string };
    price: number;
    link: string;
}
