// lib/sample-data.ts
export interface Product {
    name: string;
    type: string;
    colors: string[];
    images: { [color: string]: string };
    price: number;
    link: string;
}

const sampleData: { product: Product[] } = {
    product: [
        {
            name: "Wave",
            type: "Card",
            colors: ["#006d6a", "#f14e54", "#6b6b6b", "#000000"],
            images: {
                "#006d6a": "/path/to/image-green.png",
                "#f14e54": "/path/to/image-red.png",
                "#6b6b6b": "/path/to/image-gray.png",
                "#000000": "/path/to/image-black.png",
            },
            price: 110000,
            link: "/product/wave",
        },

        {
            name: "Wave",
            type: "Card",
            colors: ["#006d6a", "#f14e54", "#6b6b6b", "#000000"],
            images: {
                "#006d6a": "/path/to/image-green.png",
                "#f14e54": "/path/to/image-red.png",
                "#6b6b6b": "/path/to/image-gray.png",
                "#000000": "/path/to/image-black.png",
            },
            price: 110000,
            link: "/product/wave",
        },

        {
            name: "Wave",
            type: "Card",
            colors: ["#006d6a", "#f14e54", "#6b6b6b", "#000000"],
            images: {
                "#006d6a": "/path/to/image-green.png",
                "#f14e54": "/path/to/image-red.png",
                "#6b6b6b": "/path/to/image-gray.png",
                "#000000": "/path/to/image-black.png",
            },
            price: 110000,
            link: "/product/wave",
        },

        {
            name: "Wave",
            type: "Card",
            colors: ["#006d6a", "#f14e54", "#6b6b6b", "#000000"],
            images: {
                "#006d6a": "/path/to/image-green.png",
                "#f14e54": "/path/to/image-red.png",
                "#6b6b6b": "/path/to/image-gray.png",
                "#000000": "/path/to/image-black.png",
            },
            price: 110000,
            link: "/product/wave",
        },

        {
            name: "Wave",
            type: "Card",
            colors: ["#006d6a", "#f14e54", "#6b6b6b", "#000000"],
            images: {
                "#006d6a": "/path/to/image-green.png",
                "#f14e54": "/path/to/image-red.png",
                "#6b6b6b": "/path/to/image-gray.png",
                "#000000": "/path/to/image-black.png",
            },
            price: 110000,
            link: "/product/wave",
        },

        {
            name: "Wave",
            type: "Card",
            colors: ["#006d6a", "#f14e54", "#6b6b6b", "#000000"],
            images: {
                "#006d6a": "/path/to/image-green.png",
                "#f14e54": "/path/to/image-red.png",
                "#6b6b6b": "/path/to/image-gray.png",
                "#000000": "/path/to/image-black.png",
            },
            price: 110000,
            link: "/product/wave",
        },
    ],
};

export default sampleData;
