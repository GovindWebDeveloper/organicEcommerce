import BestSellingProducts from "../HomePage/Sections/BestSellingProducts";
import Blogs from "../HomePage/Sections/Blogs";
import Category from "../HomePage/Sections/Category";
import DiscountForm from "../HomePage/Sections/DiscountForm";
import FeaturedProduct from "../HomePage/Sections/FeaturedProduct";
import Hero from "../HomePage/Sections/Hero";
import JustArrived from "../HomePage/Sections/JustArrived";
import MostPopularProduct from "../HomePage/Sections/MostPopularProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <BestSellingProducts />
      <FeaturedProduct />
      <DiscountForm />
      <MostPopularProduct />
      <JustArrived />
      <Blogs />
    </>
  );
};

export default Home;
