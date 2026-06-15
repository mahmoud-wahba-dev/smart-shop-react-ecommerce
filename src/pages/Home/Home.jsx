import CategoriesComp from "./components/CategoriesComp";
import Header from "./components/Header";
import LatestProducts from "./components/LatestProducts";
import OfferTimer from "./components/OfferTimer";
import SecondComp from "./components/SecondComp";
import ShopByCategory from "./components/ShopByCategory";

const Home = () => {
  return (
    <>
      <Header />
      <SecondComp />
      <CategoriesComp />
      <LatestProducts />
      <OfferTimer/>
      <ShopByCategory/>
    </>
  );
};

export default Home;
