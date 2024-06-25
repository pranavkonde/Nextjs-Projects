import Link from "next/link";

async function fetchData(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/products',{ cache: 'force-cache' })
        const result = await apiResponse.json()
        return result.products
    }catch(error){
        throw new Error(error)
    }
}

export default async function Products() {
    const data = await fetchData();
    return (
        <>
        <h1>Products Page</h1>
        <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <Link href={`/server-data-fetch/${item.id}`}>
                            {item.title} - ${item.price}
                        </Link>
                    </li>
                ))}
            </ul>
    </>
    );
  }
  