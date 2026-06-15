import ProductCard from "@/composable/ProductCard";

const LatestProducts = () => {

  return (
    <section className="section-gap">
      <div className="container">
        <h5 className="text-center font-bold text-20px text-brown border-b-4 rounded-5px border-primary w-fit m-auto pb-3">
          أﺣﺪث المنتجات
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
