export interface Product {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
}

export const products: Product[] = [
    {
        id: "UUID_ABC-1",
        name: "Teslo Hoodie",
        price: 15,
        rating: 4.5,
        image: "/images/products/1623735-00-A_0_2000.jpg"
    },
    {
        id: "UUID_ABC-2",
        name: "Teslo Clap",
        price: 25,
        rating: 4.5,
        image: "/images/products/1657916-00-A_1.jpg"
    },
    {
        id: "UUID_ABC-3",
        name: "Let the sunshine",
        price: 36,
        rating: 4.5,
        image: "/images/products/1700280-00-A_1.jpg"
    },
    {
        id: "UUID_ABC-4",
        name: "Teslo Hoodie",
        price: 15,
        rating: 4.5,
        image: "/images/products/1742702-00-A_0_2000.jpg"
    },
    
]