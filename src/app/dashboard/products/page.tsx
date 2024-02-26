import { ProductCard } from '@/products'
import React from 'react'
import { products } from '@/products/data/producto'

export default function ProductsPage() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>

            {
                products.map(product => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))
            }
        </div>
    )
}
