import { Checkbox, Slider } from "antd";

const FilterComponent = ({ categories, filters, setFilters }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "2em 1em",
        backgroundColor: "#edf2f2",
        width: "250px",
        height: "500px",
        overflow:"auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <h2 style={{ fontSize: "1.6em" }}>Filter Products</h2>

      {/* Category Filter */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <h3 style={{ fontSize: "1.5em", marginTop: "1em" }}>Category</h3>
        {categories.map((category) => (
          <Checkbox
            key={category}
            checked={filters.category.includes(category)}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                category: prev.category.includes(category)
                  ? prev.category.filter((c) => c !== category)
                  : [...prev.category, category],
              }))
            }
          >
            {category}
          </Checkbox>
        ))}
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 style={{ fontSize: "1.5em", marginTop: "1em" }}>Price Range</h3>
        <Slider
          range
          min={10}
          max={300}
          defaultValue={[10, 300]}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, priceRange: value }))
          }
        />
        <p>
          Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </p>
      </div>
    </div>
  );
};

export default FilterComponent;
