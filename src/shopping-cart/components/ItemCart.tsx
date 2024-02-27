"use client"

import Image from "next/image"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"
import { addProductToCart, removeProductFromCart, removeSingleItemFromCart } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";
import { Product } from "@/products/data/producto";

interface Props {
    product: Product;
    quantity: number;
}


export default function ItemCat({ product, quantity }: Props) {

    const router = useRouter()

    const onAddToCart = () => {
        router.refresh()
    }

    const onRemoveFromCart = () => {
        removeSingleItemFromCart(product.id)
        router.refresh()
    }

    return (
        <div className="shadow rounded-lg w-1/2 px-4 bg-gray-800 border-gray-100">
            <div className="flex">
                <div className="p-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex flex-col justify-between p-2 w-full">
                    <h2 className="text-white">{product.name} </h2>
                    <p className="text-white">{product.price} </p>
                </div>

                <div className="flex gap-3 justify-center items-center">
                    <button
                        className="text-blue-500"
                    >
                        <IoAddCircleOutline size={25} />
                    </button>

                    <span
                        className="text-white"
                    >
                        {quantity}
                    </span>

                    <button
                        onClick={onRemoveFromCart}
                        className="text-red-500"
                    >
                        <IoRemoveCircleOutline size={25} />
                    </button>
                </div>
            </div>
        </div>
    )
}
