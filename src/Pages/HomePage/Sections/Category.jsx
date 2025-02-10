import { useEffect, useState } from "react";
import SliderComponent from "../../../Component/SliderComponent/SliderComponent";
// import { getProductCategories } from "../../../Services/ProductCategories";
import { getProducts } from "../../../Services/ProductServices";

const Category = () => {
  const [product, setProduct] = useState([]); // Holds product data
  const [error, setError] = useState(null); // Holds API error messages

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProduct(data || []); // Ensure data is always an array
      } catch (error) {
        setError("Failed to load products"); // Store error message
        console.error("Error loading products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Show error message if API fails */}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      {/* Show the slider only if there are products */}
      {product.length > 0 ? (
        <SliderComponent title="All Products" items={product} imageStyle={{ borderRadius: "0px" }} />
      ) : !error ? (
        <p>Loading products...</p> // Show loading message if API is still fetching
      ) : null}
    </div>
  );
};

export default Category;
