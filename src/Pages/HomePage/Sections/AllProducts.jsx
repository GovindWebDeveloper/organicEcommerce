import { useEffect, useState } from "react";
import FilterComponent from "../../../Component/Filter/Filter";
import ProductCard from "../../../Component/Card/Card";
import { getProducts } from "../../../Services/ProductServices";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data || []);
      } catch (error) {
        setError("Failed to load products");
        console.error("Error loading products:", error);
      }
    }

    fetchData();
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];

  // Apply filters
  const filteredProducts = products.filter((item) => {
    const inCategory =
      filters.category.length === 0 || filters.category.includes(item.category);
    const inPriceRange =
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1];
    return inCategory && inPriceRange;
  });

  return (
    <div style={{ display: "flex", width: "100%", padding: "2em" }}>
      {/* Sidebar Filter */}
      <div
        style={{
          height: "100vh",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <FilterComponent
          categories={categories}
          filters={filters}
          setFilters={setFilters}
        />
      </div>

      {/* Product List */}
      <section style={{ padding: "40px 20px", width: "85%" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1 style={{ fontSize: "2em", marginBottom: "1em" }}>All Products</h1>
        </header>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "90%",
            margin: "auto",
          }}
        >
          {error ? <p style={{ color: "red" }}>{error}</p> : null}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))
          ) : !error ? (
            <p>Loading products</p>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
