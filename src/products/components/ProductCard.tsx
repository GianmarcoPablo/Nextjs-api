"use client"

import Image from "next/image"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"
import { Star } from "..";
import { addProductToCart } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

interface Props {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
}


export default function ProductCard({ id, name, price, rating, image }: Props) {

    const router = useRouter()

    const onAddToCart = () => {
        addProductToCart(id)
        router.refresh()
    }

    return (
        <div className="shadow rounded-lg max-w-sm bg-gray-800 border-gray-100">
            <div className="p-2">
                <Image
                    width={500}
                    height={500}
                    className="rounded"
                    src={image}
                    alt={`${name} image`}
                />
            </div>

            <div className="px-5 pb-5">
                <a href="#">
                    <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                        Apple Watch Series 7 GPS, Aluminum Case with Braided Solo Loop
                    </h3>
                </a>

                <div className="flex items-center  mt-2.5 mh-5">
                    {
                        Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} />
                        ))
                    }

                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-clip">
                        {rating.toFixed(2)}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${price.toFixed(2)}
                    </span>
                    <div className="flex">
                        <button
                            className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-10 h-10 flex items-center justify-center"
                            onClick={onAddToCart}
                        >
                            <IoAddCircleOutline
                                size={20}
                            />
                        </button>

                        <button
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg w-10 h-10 flex items-center justify-center"
                        >
                            <IoRemoveCircleOutline
                                size={20}
                            />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
