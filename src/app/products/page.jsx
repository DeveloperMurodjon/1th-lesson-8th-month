import ProductCard from "@/components/ProductCard";
import React from "react";

const Products = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json());

    return (
        <div className="py-20 grid grid-cols-4 container mx-auto gap-5">
            {data?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
