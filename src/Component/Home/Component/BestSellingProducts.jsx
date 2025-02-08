import Images from "../../ImageComponent/Images";
import SliderComponent from "../Reusable Components/SliderComponent";

const categories = [
  { id: 1, name: "Whole Wheat Sandwich Bread", img: Images.ProductThumb1 },
  { id: 2, name: "Whole Grain Oatmeal", img: Images.ProductThumb2 },
  { id: 3, name: "Sharp Cheddar Cheese Block", img: Images.ProductThumb3 },
  { id: 4, name: "Organic Baby Spinach", img: Images.ProductThumb4 },
  {
    id: 5,
    name: "Organic Spinach Leaves (Fresh Produce)",
    img: Images.ProductThumb5,
  },
  { id: 6, name: "Fresh Salmon", img: Images.ProductThumb6 },
  {
    id: 7,
    name: "Imported Italian Spaghetti Pasta",
    img: Images.ProductThumb7,
  },
  { id: 8, name: "Granny Smith Apples", img: Images.ProductThumb8 },
  { id: 9, name: "Organic 2% Reduced Fat Milk", img: Images.ProductThumb9 },
  { id: 10, name: "Greek Style Plain Yogurt", img: Images.ProductThumb10 },
];

const BestSellingProducts = () => {
  return (
    <div>
      <SliderComponent
        title="Best Selling Products"
        items={categories} 
        imageStyle={{ borderRadius: "0px" }} 
      />
    </div>
  );
};

export default BestSellingProducts;
