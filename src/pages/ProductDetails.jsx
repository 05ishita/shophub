
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();  // URL se product id li.

  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
    // Sirf us product ka data fetch kiya.
      .then(res => res.json())
      .then(data => setProduct(data));

  }, [id]);  // Id change hogi to API dobara chalegi.

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>

      <img src={product.image} width="200" />

      <h2>{product.title}</h2>

      <h3>₹ {product.price}</h3>

      <p>{product.description}</p>

    </div>
  );
}

export default ProductDetails;