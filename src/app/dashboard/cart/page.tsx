import { Product, products } from "@/products/data/producto"
import { ItemCart } from "@/shopping-cart"
import { Metadata } from "next"
import { cookies } from "next/headers"


export const metadata: Metadata = {
    title: "Cart",
    description: "Cart page",
}

interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProductsInCart = (car: { [key: string]: number }): ProductInCart[] => {
    const productsInCart: ProductInCart[] = []

    for (const id in car) {
        const product = products.find(p => p.id === id)
        if (product) {
            productsInCart.push({ product, quantity: car[id] })
        }
    }

    return productsInCart
}

export default function Cartpage() {

    const coockiesStore = cookies()

    const cart = JSON.parse(coockiesStore.get('cart')?.value ?? '{}') as { [key: string]: number }
    const productsInCart = getProductsInCart(cart)

    return (
        <div>
            <h1 className='text-5xl'>Products en el carrito</h1>
            <hr className='mb-2' />

            <div className='flex flex-col sm:flex-row gap-2 w-full'>
                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {
                        productsInCart.map(({ product, quantity }) => (
                            <ItemCart key={product.id} product={product} quantity={quantity} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
