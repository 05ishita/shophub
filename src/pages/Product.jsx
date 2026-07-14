import { useState, useMemo, useCallback } from "react";
import ProductCard from "../components/ProductCard";
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

    result = result.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (sortOrder === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;

  }, [products, search, sortOrder, category]);

  if (loading) {
    return (
      <div className="page-status">
        <h2>Loading Products...</h2>
      </div>
    );
  }

  return (

    <>

      <section className="hero">

        <h1>Discover Amazing Products</h1>

        <p>
          Shop quality products with a clean React interface,
          search instantly, filter categories, and sort prices.
        </p>

      </section>

      <section className="product-section">

        <h2 className="section-title">
          Featured Products
        </h2>

        <p className="section-subtitle">
          {filteredProducts.length} Products Available
        </p>

        <div className="controls">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
          />

          <select
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="">Sort By</option>
            <option value="low">Price : Low → High</option>
            <option value="high">Price : High → Low</option>
          </select>

          <select
            value={category}
            onChange={handleCategory}
          >
            <option value="all">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
          </select>

        </div>

        <div className="grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))

          ) : (

            <div className="empty-state">

              <h2>No Products Found</h2>

            </div>

          )}

        </div>

      </section>

    </>

  );
}

export default Product;