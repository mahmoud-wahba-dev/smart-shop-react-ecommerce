import categoryImg1 from "../../../assets/imgs/home/category-img1.webp";
import categoryImg2 from "../../../assets/imgs/home/category-img2.webp";
import { Link } from "react-router-dom";

const categoriesArr = [
  {
    title: "ملابس الأطفال",
    subtitle: "خصم 50%",
    link: "/childern-boys",
    img: categoryImg1,
    imgAlt: "childern-boys",
    secBgColor: "#D6F7FE",
  },
  {
    title: "فساتين بناتي",
    subtitle: "خصم كبير",
    link: "/childern-girls",
    img: categoryImg2,
    imgAlt: "childern-girls",
    secBgColor: "#FFDBDF",
  },
];
const CategoriesComp = () => {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {categoriesArr.map((item, idx) => (
            <div
            key={item.idx}
              style={{ backgroundColor: item.secBgColor }}
              className={`p-1 flex items-center gap-1 text-black `}
            >
              <div>
                <img src={item.img} alt={item.imgAlt} />
              </div>
              <div>
                <h5 className="font-bold text-32px mb-2.5"> {item.title} </h5>
                <p className="font-medium text-24px mb-2.5">
                  {" "}
                  {item.subtitle}{" "}
                </p>
                <Link
                  to={item.link}
                  className="font-normal text-20px link link-animated"
                >
                  تسوق الان
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesComp;
