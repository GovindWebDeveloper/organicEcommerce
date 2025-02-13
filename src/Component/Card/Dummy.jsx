import { useState } from "react";
import { Card, Button, Checkbox, Slider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../Responsive/ResponsiveContent/Content.css";

const SliderComponent = ({
  title,
  items = [],
  visibleCards = 5,
  containerStyle = {},
  titleStyle = {},
  cardStyle = {},
  imageStyle = {},
  imageTitleStyle = {},
  prevButton = (
    <Button>
      <LeftOutlined />
    </Button>
  ),
  nextButton = (
    <Button>
      <RightOutlined />
    </Button>
  ),
  viewAllButtonText = "View All",
  closeViewAllButtonText = "X",
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 500],
  });

  const categories = [...new Set(items.map((item) => item.category))];

  const handleNext = () => {
    if (startIndex < items.length - visibleCards) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const filteredItems = items.filter((item) => {
    const inCategory =
      filters.category.length === 0 || filters.category.includes(item.category);
    const inPriceRange =
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1];
    return inCategory && inPriceRange;
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "start",
        gap: "1em",
        width: "100%",
        padding: "2em",
      }}
    >
      <div
        className="sidebar open"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
          padding: "2em 1em",
        }}
      >
        <h2 style={{ fontSize: "1.6em" }}>Filter Products</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2em",
          }}
        >
          <h3 style={{ fontSize: "1.5em", marginTop: "1em" }}>Category</h3>
          {categories.map((category) => (
            <Checkbox
              style={{ fontSize: "1.2em" }}
              key={category}
              checked={filters.category.includes(category)}
              onChange={(e) => {
                setFilters({
                  ...filters,
                  category: e.target.checked
                    ? [...filters.category, category]
                    : filters.category.filter((c) => c !== category),
                });
              }}
            >
              {category}
            </Checkbox>
          ))}
        </div>
        <div>
          <h3 style={{ fontSize: "1.5em", marginTop: "1em" }}>Price Range</h3>
          <Slider
            range
            min={0}
            max={500}
            defaultValue={[0, 500]}
            onChange={(value) => setFilters({ ...filters, priceRange: value })}
          />
          <p>
            Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </p>
        </div>
      </div>

      <section
        style={{ padding: "40px 20px", width: "85%", ...containerStyle }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            margin: "auto",
          }}
        >
          <h1 style={{ fontSize: "2em", marginBottom: "1em", ...titleStyle }}>
            {title}
          </h1>
          <div>
            {!viewAll ? (
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    setViewAll(true);
                  }}
                  style={{ marginRight: "1em" }}
                >
                  {viewAllButtonText}
                </Button>
                <span
                  onClick={startIndex === 0 ? null : handlePrevious}
                  style={{
                    cursor: startIndex === 0 ? "not-allowed" : "pointer",
                    opacity: startIndex === 0 ? 0.5 : 1,
                  }}
                >
                  {prevButton}
                </span>
                <span
                  onClick={
                    startIndex >= items.length - visibleCards
                      ? null
                      : handleNext
                  }
                  style={{
                    cursor:
                      startIndex >= items.length - visibleCards
                        ? "not-allowed"
                        : "pointer",
                    opacity:
                      startIndex >= items.length - visibleCards ? 0.5 : 1,
                  }}
                >
                  {nextButton}
                </span>
              </>
            ) : (
              <Button type="default" onClick={() => setViewAll(false)}>
                {closeViewAllButtonText}
              </Button>
            )}
          </div>
        </header>

        <div
          style={{
            display: "flex",
            flexWrap: viewAll ? "wrap" : "nowrap",
            justifyContent: viewAll ? "center" : "unset",
            gap: "10px",
            overflow: "hidden",
            width: "90%",
            margin: "auto",
            ...cardStyle,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: viewAll ? "wrap" : "nowrap",
              gap: "10px",
              transform: viewAll
                ? "none"
                : `translateX(-${startIndex * 220}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                hoverable
                style={{
                  width: viewAll ? "calc(20% - 10px)" : "210px",
                  textAlign: "center",
                  backgroundColor: "white",
                  marginBottom: viewAll ? "10px" : "0",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    ...imageStyle,
                  }}
                />
                <h3
                  style={{
                    fontSize: "20px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "block",
                    ...imageTitleStyle,
                  }}
                >
                  {item.title}
                </h3>
                <h3>${item.price}</h3>
                <Button>Add to Cart</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderComponent;
