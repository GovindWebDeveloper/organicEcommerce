import BestSellingProducts from "./Component/BestSellingProducts";
import Blogs from "./Component/Blogs";
import Category from "./Component/Category";
import DiscountForm from "./Component/DiscountForm";
import FeaturedProduct from "./Component/FeaturedProduct";
import Hero from "./Component/Hero";
import JustArrived from "./Component/JustArrived";
import MostPopularProduct from "./Component/MostPopularProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <BestSellingProducts />
      <FeaturedProduct/> 
      <DiscountForm/>
      <MostPopularProduct />
      <JustArrived/>
      <Blogs/>
    </>
  );
};

export default Home;
