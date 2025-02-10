import Images from "../../../assets/Images/ImageComponent/Images";
import SliderComponent from "../../../Component/SliderComponent/SliderComponent"; // Ensure this path is correct

const categories = [
  { id: 1, name: "Whole Wheat Sandwich Bread", img: Images.ProductThumb11 },
  { id: 2, name: "Whole Grain Oatmeal", img: Images.ProductThumb12 },
  { id: 3, name: "Sharp Cheddar Cheese Block", img: Images.ProductThumb13 },
  { id: 4, name: "Organic Baby Spinach", img: Images.ProductThumb14 },
  { id: 5, name: "Organic Spinach Leaves (Fresh Produce)", img: Images.ProductThumb15 },
  { id: 6, name: "Fresh Salmon", img: Images.ProductThumb16 },
  { id: 7, name: "Imported Italian Spaghetti Pasta", img: Images.ProductThumb17 },
  { id: 8, name: "Granny Smith Apples", img: Images.ProductThumb18 },
  { id: 9, name: "Organic 2% Reduced Fat Milk", img: Images.ProductThumb19 },
  { id: 10, name: "Greek Style Plain Yogurt", img: Images.ProductThumb20 },
];

const JustArrived = () => {
  return (
    <div>
      <SliderComponent
        title="Just Arrived"
        items={categories}
        imageStyle={{ borderRadius: "0px" }} 
      />
    </div>
  );
};

export default JustArrived;
