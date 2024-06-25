async function fetchData(productId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/products/${productId}`,
      { cache: "force-cache" }
    );
    const result = await apiResponse.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function details({ params }) {
  const productsData = await fetchData(params.details);
  return (
    <>
      <h1>Inside the Product Page</h1>
      <p>
        <strong>Title:</strong> {productsData.title}
      </p>
      <p>
        <strong>Description:</strong> {productsData.description}
      </p>
      <p>
        <strong>Category:</strong> {productsData.category}
      </p>
      <p>
        <strong>Price:</strong> {productsData.price}
      </p>
      <p>
        <strong>Rating:</strong> {productsData.rating}
      </p>
      <p>
        <strong>Brand:</strong> {productsData.brand}
      </p>
    </>
  );
}
