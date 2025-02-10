import { useState } from "react";
import { Card, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import '../Responsive/ResponsiveContent/Content.css'

const SliderComponent = ({
  title,
  items = [],
  visibleCards = 6,
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

  return (
    <section className="slider-container" style={{ padding: "40px 20px", width: "100%", ...containerStyle }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        <h1 className="slider-header" style={{fontSize:"2em",marginBottom:"1em", ...titleStyle}}>{title}</h1>

        <div style={{ marginBottom: "1em" }}>
          {!viewAll ? (
            <>
              <Button
                type="primary"
                onClick={() => setViewAll(true)}
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
                  startIndex >= items.length - visibleCards ? null : handleNext
                }
                style={{
                  cursor:
                    startIndex >= items.length - visibleCards
                      ? "not-allowed"
                      : "pointer",
                  opacity: startIndex >= items.length - visibleCards ? 0.5 : 1,
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

      <div className="slider-cards"
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
            transform: viewAll ? "none" : `translateX(-${startIndex * 220}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {items.map((item) => (
            <Card
            className="slider-card"
              key={item.id}
              hoverable
              style={{
                width: viewAll ? "calc(16.66% - 10px)" : "210px",
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
              <h3 className="slider-header" style={{ fontSize: "20px", ...imageTitleStyle }}>
                {item.title}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
