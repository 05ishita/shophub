

import ProductCard from "../components/ProductCard";
import { useState, useMemo ,  useCallback} from "react";
import useFetch from "../hooks/useFetch";

function Product() {

  const { data: products, loading } =
  useFetch("https://fakestoreapi.com/products");

  const [search, setSearch] = useState("");

  const [sortOrder, setSortOrder] = useState("");

  const [category, setCategory] = useState("all");

  const handleSearch = useCallback((e) => {
  setSearch(e.target.value);
}, []);

const handleSort = useCallback((e) => {
  setSortOrder(e.target.value);
}, []);

const handleCategory = useCallback((e) => {
  setCategory(e.target.value);
}, []);
  
  const filteredProducts = useMemo(() => {

  let result = [...products];

  // Search
  result = result.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {    // Selected category ke
  //  products hi dikhenge.
  result = result.filter(
    (product) => product.category === category
  );
}
  // Sorting
  if (sortOrder === "low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;

}, [products, search, sortOrder , category]);

  
  // API aane tak loading show hogi.
  if (loading) {
return (
  <div className="loader">
    Loading Products...
  </div>
);
}
  return(
  

    <div className="product">

      <h1>Our Products</h1>
     
     <input
  type="text"
  placeholder="Search Product..."
  value={search}
  onChange={handleSearch}
/>
    
    <select
  value={sortOrder}
  onChange={handleSort}
>

  <option value="">Sort By</option>

  <option value="low">Low to High</option>

  <option value="high">High to Low</option>

</select>


<select
  value={category}
  onChange={handleCategory}
>

  <option value="all">All</option>

  <option value="men's clothing">
    Men's Clothing
  </option>

  <option value="women's clothing">
    Women's Clothing
  </option>

  <option value="electronics">
    Electronics
  </option>

  <option value="jewelery">
    Jewelery
  </option>

</select>


{filteredProducts.length > 0 ? (

  filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))

) : (

  <h2>No Products Found</h2>

)}

    </div>
  );
}

export default Product;