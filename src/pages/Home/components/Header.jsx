import heroBg from "../../../assets/imgs/home/hero-bg.webp";
import hero from "../../../assets/imgs/home/hero.webp";
const Header = () => {
  return (
    <header className="pb-14">
      <div className="container">
        <div
          data-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "carousel-box carousel-active:bg-primary",
    "isRTL": true,
    "isAutoPlay": true, "speed": 3000,
    "isInfiniteLoop": true
  }'
          class="relative w-full"
          dir="rtl"
        >
          <div class="carousel h-full">
            <div class="carousel-body h-full opacity-0">
              <div class="carousel-slide">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                  <div className="flex justify-center">
                    <div className="text-black text-center">
                      <p className="font-normal text-27px mb-6 ">
                        براندات نساء عالميه{" "}
                      </p>
                      <h1 className="font-normal text-48px mb-6">
                        احدث ادوات الجمال
                      </h1>
                      <p className="font-normal text-27px mb-6">
                        {" "}
                        براندات نساء عالميه{" "}
                      </p>
                      <div>
                        <button className="btn btn-primary rounded-50px h-12 font-medium text-base">
                          اكتشف الآن
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="max-w-[577px] max-h-[577px]"
                      src={heroBg}
                      alt="hero bg"
                    />

                    <img
                      className="absolute inset-0 m-auto top-[12%] max-w-full max-h-full scale-75"
                      src={hero}
                      alt="hero person"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-slide">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                  <div className="flex justify-center">
                    <div className="text-black text-center">
                      <p className="font-normal text-27px mb-6 ">
                        براندات نساء عالميه{" "}
                      </p>
                      <h1 className="font-normal text-48px mb-6">
                        احدث ادوات الجمال
                      </h1>
                      <p className="font-normal text-27px mb-6">
                        {" "}
                        براندات نساء عالميه{" "}
                      </p>
                      <div>
                        <button className="btn btn-primary rounded-50px h-12 font-medium text-base">
                          اكتشف الآن
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="max-w-[577px] max-h-[577px]"
                      src={heroBg}
                      alt="hero bg"
                    />

                    <img
                      className="absolute inset-0 m-auto top-[12%] max-w-full max-h-full scale-75"
                      src={hero}
                      alt="hero person"
                    />
                  </div>
                </div>
              </div>

              <div class="carousel-slide">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                  <div className="flex justify-center">
                    <div className="text-black text-center">
                      <p className="font-normal text-27px mb-6 ">
                        براندات نساء عالميه{" "}
                      </p>
                      <h1 className="font-normal text-48px mb-6">
                        احدث ادوات الجمال
                      </h1>
                      <p className="font-normal text-27px mb-6">
                        {" "}
                        براندات نساء عالميه{" "}
                      </p>
                      <div>
                        <button className="btn btn-primary rounded-50px h-12 font-medium text-base">
                          اكتشف الآن
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      className="max-w-[577px] max-h-[577px]"
                      src={heroBg}
                      alt="hero bg"
                    />

                    <img
                      className="absolute inset-0 m-auto top-[12%] max-w-full max-h-full scale-75"
                      src={hero}
                      alt="hero person"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2.5">
            <button
              type="button"
              class="carousel-prev start-5 carousel-disabled:bg-primary size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
            >
              <span class="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
              <span class="sr-only">Previous</span>
            </button>

            <div class="carousel-pagination  flex justify-center gap-3"></div>

            <button
              type="button"
              class="carousel-next end-5 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
            >
              <span class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
