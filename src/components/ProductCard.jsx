import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard({ product }) {
    if (!product) return null;

    return (
        <Link href={`/products/${product.id}/`} className='rounded-2xl overflow-hidden shadow-2xl cursor-pointer'>
            <Image src={product.image} alt={product.title} className='w-full aspect-square' height={200} width={300} />
            <h3 className='text-xl font-semibold p-3'> {product.title}</h3>
        </Link>
    )
}

export default ProductCard