import ProductCard from "@/composable/ProductCard";
import React from "react";

const ShopByCategory = () => {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="flex gap-8 ">
          <nav
            className="tabs flex-col items-start space-y-1 border border-[#44444433] rounded-30px"
            aria-label="Tabs"
            role="tablist"
            data-tabs-vertical="true"
            aria-orientation="horizontal"
          >
            <div>
              <p className="px-14 py-7 font-medium text-22px text-white bg-primary rounded-tr-30px rounded-tl-30px">
                تسوق عبر الفئات
              </p>
            </div>
            <button
              type="button"
              className="px-14 py-7 font-normal text-22px text-black/80 btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20 active w-full"
              id="tabs-pill-vertical-item-1"
              data-tab="#tabs-pill-vertical-1"
              aria-controls="tabs-pill-vertical-1"
              role="tab"
              aria-selected="true"
            >
              رجالي
            </button>
            <button
              type="button"
              className="px-14 py-7 font-normal text-22px text-black/80 btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20  w-full"
              id="tabs-pill-vertical-item-2"
              data-tab="#tabs-pill-vertical-2"
              aria-controls="tabs-pill-vertical-2"
              role="tab"
              aria-selected="false"
            >
              حريمي
            </button>
            <button
              type="button"
              className="px-14 py-7 font-normal text-22px text-black/80 btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20  w-full"
              id="tabs-pill-vertical-item-3"
              data-tab="#tabs-pill-vertical-3"
              aria-controls="tabs-pill-vertical-3"
              role="tab"
              aria-selected="false"
            >
              اطفال
            </button>

            <button
              type="button"
              className="px-14 py-7 font-normal text-22px text-black/80 btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20  w-full"
              id="tabs-pill-vertical-item-3"
              data-tab="#tabs-pill-vertical-3"
              aria-controls="tabs-pill-vertical-3"
              role="tab"
              aria-selected="false"
            >
              اكسسوارات
            </button>

            <button
              type="button"
              className="px-14 py-7 font-normal text-22px text-black/80 btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20  w-full"
              id="tabs-pill-vertical-item-3"
              data-tab="#tabs-pill-vertical-3"
              aria-controls="tabs-pill-vertical-3"
              role="tab"
              aria-selected="false"
            >
              العاب
            </button>
          </nav>

          <div className="ms-3 w-full">
            <div
              id="tabs-pill-vertical-1"
              role="tabpanel"
              aria-labelledby="tabs-pill-vertical-item-1"
            >
              <div
                id="multi-slide"
                data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, ,"lg": 2, "xl": 3 } }'
                className="relative w-full"
              >
                <div className="carousel h-80">
                  <div className="carousel-body  h-full opacity-0">
                    <div className="carousel-slide">
                      <h1>ssssssssssssss</h1>
                      <div className="bg-base-200/50 flex h-full justify-center p-6">
                        <span className="self-center text-lg">First slide</span>
                      </div>
                    </div>
                    <div className="carousel-slide">
                      <ProductCard />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
                >
                  <span className="icon-[tabler--chevron-left] size-5 cursor-pointer"></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  type="button"
                  className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
                >
                  <span className="icon-[tabler--chevron-right] size-5"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
            <div
              id="tabs-pill-vertical-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-pill-vertical-item-2"
            >
              <p className="text-base-content/80">
                This is your{" "}
                <span className="text-base-content font-semibold">Profile</span>{" "}
                tab, where you can update your personal information and manage
                your account details.
              </p>
            </div>
            <div
              id="tabs-pill-vertical-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-pill-vertical-item-3"
            >
              <p className="text-base-content/80">
                <span className="text-base-content font-semibold">
                  Messages:
                </span>{" "}
                View your recent messages, chat with friends, and manage your
                conversations.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='lg:col-span-4'>
                    
                </div>
                <div className='lg:col-span-8'></div>
            </div> */}
      </div>
    </section>
  );
};

export default ShopByCategory;
