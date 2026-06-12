import truckIcon from "../../../assets/imgs/home/truck-icon.svg";
import returnIcon from "../../../assets/imgs/home/return-icon.svg";
import supportIcon from "../../../assets/imgs/home/support-icon.svg";
import offersIcon from "../../../assets/imgs/home/offers-icon.svg";
const secFeatures = [
  {
    title: "توصيل مجاني",
    subtitle: "للطلبات أعلى من 200جنية",
    icon: truckIcon,
    iconAlt: "free delivery",
  },
  {
    title: "استرجاع الاموال",
    subtitle: "استرجاع اموالك او الاستبدال",
    icon: returnIcon,
    iconAlt: "money refund",
  },
  {
    title: "دعم فني",
    subtitle: "دعم مدار الساعة",
    icon: supportIcon,
    iconAlt: "technical support",
  },
  {
    title: "عروض حصرية",
    subtitle: "خصومات كبيرة على منتجاتنا",
    icon: offersIcon,
    iconAlt: "exclusive offers",
  },
];
const SecondComp = () => {
  return (
    <>
      <section className="section-gap">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-14  gap-4   border-b-3 border-[#93CADE4D] pb-11">
            {secFeatures.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2.5">
                  <div className="size-14 center rounded-10px border border-[#EAEAEA]">
                    <img src={item.icon} alt={item.iconAlt} />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondComp;
