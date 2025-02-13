import { Card, Button } from "antd";
import { MdOutlineAddShoppingCart, MdFavorite } from "../../assets/Icon/Icon";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      style={{
        width: "calc(25% - 10px)",
        textAlign: "center",
        backgroundColor: "white",
        marginBottom: "10px",
      }}
      onClick={() => navigate(`/Product/${item.id}`)}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "160px", height: "160px" }}
      />
      <h3
        style={{
          fontSize: "20px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {item.title}
      </h3>
      <h3>${item.price}/-</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button>
          <MdOutlineAddShoppingCart style={{ fontSize: "1.5em" }} />
        </Button>
        <Button>
          <MdFavorite style={{ fontSize: "1.5em", color: "grey" }} />
        </Button>
      </div>
      <div>
        <Button
          style={{
            width:"100%",
            marginTop:"1em",
            backgroundColor: "orange",
            border: "0px",
          }}
        >
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
