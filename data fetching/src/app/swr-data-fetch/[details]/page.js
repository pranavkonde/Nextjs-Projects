"use client";

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function clientSideData(){
    const { data, error, isLoading } = useSWR('https://dummyjson.com/products', fetcher)
    console.log("SWR",data)
    if(error){
        return <h1>Getting Error</h1>
    }
    if(isLoading){
        return (
            <h3>Loading Please Wait</h3>
        )
    }

    return (
        <>
            <h1>Client Side Data Fetching using Swr</h1>
            <ul>
                {data && data.products.length > 0? data.products.map((product) => {
                    return <li key={product.id}>{product.title}</li>;
                }) : null}
            </ul>
        </>
    );
    
}   