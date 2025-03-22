"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Page() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getDetails = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
            } catch (error) {
                console.error("Xatolik:", error)
                alert("Ma'lumot yuklashda xatolik yuz berdi!")
            } finally {
                setLoading(false)
            }
        }
        if (id) getDetails()
    }, [id])

    if (loading || !product) {
        return <p className='text-center text-lg font-semibold mt-10'>Loading...</p>
    }

    return (
        <div className="max-w-4xl mx-auto p-5">
            <Link href="/products/">
                <p className='inline-block bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition'>
                    ← Back to Products
                </p>
            </Link>

            <div className='mt-20 flex flex-col md:flex-row items-center md:items-start gap-8'>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={280}
                    height={280}
                    className='w-72 h-72  rounded-lg'
                />
                <div className="flex-1">
                    <h2 className="text-2xl font-bold">{product.title}</h2>
                    <p className="text-gray-700 mt-3">{product.description}</p>
                    <p className="text-xl font-semibold text-green-600 mt-3">${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Page
