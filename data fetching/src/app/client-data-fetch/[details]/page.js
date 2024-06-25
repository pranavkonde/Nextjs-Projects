"use client";

import { useEffect, useState } from "react";

export default function clientSideData(){
    const [loading, setLoading]= useState(false);
    const [products, setProducts] = useState([]);

    async function fetchListOfUsers(){
        try{
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/products');
            const result = await apiResponse.json();

            if(result?.products){
                setProducts(result.products)
                setLoading(false)
            }
        }catch(error){
            console.log(error)
            setProducts([])
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchListOfUsers();
    },[]);

    if(loading){
        return (
            <h3>Loading Please Wait</h3>
        )
    }

    return (
        <>
            <h1>Client Side Data Fetching</h1>
            <ul>
                {products && products.length > 0? products.map((product) => {
                    return <li key={product.id}>{product.title}</li>;
                }) : null}
            </ul>
        </>
    );
    
}   