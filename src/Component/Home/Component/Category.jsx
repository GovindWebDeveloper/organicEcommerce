import SliderComponent from "../Reusable Components/SliderComponent";
import Images from "../../ImageComponent/Images"

const categories = [
  { id: 1, name: "Fruits & Veges", img: Images.CategoryImage1 },
  { id: 2, name: "Dairy Products", img: Images.CategoryImage2 },
  { id: 3, name: "Bakery Items", img: Images.CategoryImage3 },
  { id: 4, name: "Beverages", img: Images.CategoryImage4 },
  { id: 5, name: "Snacks", img: Images.CategoryImage5 },
  { id: 6, name: "Organic Spices", img: Images.CategoryImage6 },
  { id: 7, name: "Frozen Food", img: Images.CategoryImage7 },
  { id: 8, name: "Grains & Cereals", img: Images.CategoryImage8 },
];

const Category = () => {
  return (
    <div>
      <SliderComponent
        title="Category"
        items={categories} 
      />
    </div>
  );
};

export default Category;
