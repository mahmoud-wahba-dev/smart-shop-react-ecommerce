import girlPic from "../../../assets/imgs/home/girl.webp";
import boyPic from "../../../assets/imgs/home/boy.webp";
import { Link } from "react-router-dom";

const OfferTimer = () => {
  return (
    <section className="section-gap bg-[#BDE6FC] py-16">
      <div className="cotainer">
        <div className="grid grid-cols-1 xl:grid-cols-12">
          <div className="xl:col-span-3">
            <div>
              <img src={girlPic} alt="girl pic" />
            </div>
          </div>
          <div className="xl:col-span-6 center text-center">
            <div className="">
              <div className="space-y-7">
                <p className="font-medium text-32px text-black">
                  اكبر خصم علي الاطلاق
                </p>
                <h2 className="font-extrabold text-96px text-[#9363B5]">
                  احدث ملابس الاطفال
                </h2>
                <div className="center  gap-2 xl:gap-12 font-extrabold text-64px text-black">
                  <div>
                    <p>00</p>
                    <p>يوم</p>
                  </div>

                  <div>
                    <p>00</p>
                    <p>ساعة</p>
                  </div>

                  <div>
                    <p>00</p>
                    <p>دقيقة</p>
                  </div>

                  <div className="text-[#9363B5]">
                    <p>00</p>
                    <p>ثانية</p>
                  </div>
                </div>

                <div>
                  <Link className="btn bg-[#9363B5] font-bold text-32px text-white h-16 rounded-40px ">
                    تسوق الان
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3">
            <div>
              <img src={boyPic} alt="girl pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferTimer;
