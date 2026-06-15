import girl from "../assets/imgs/home/girl.webp";
import StarIcon from "@iconify-react/material-symbols/star";
import HeartOutlineIcon from "@iconify-react/mdi/heart-outline";
const ProductCard = () => {
  const handleSize = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div className="relative bg-d9 rounded-tr-lg rounded-tl-lg mb-5">
        <img src={girl} alt="girl img" />

        <button className="absolute top-4 start-[16px]">
          <HeartOutlineIcon height="2em" />
        </button>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="flex mb-2.5">
            <StarIcon height="2em" color="#FFB800" />
            <StarIcon height="2em" color="#FFB800" />
            <StarIcon height="2em" color="#FFB800" />
            <StarIcon height="2em" color="#FFB800" />
            <StarIcon height="2em" color="" />
          </div>
          <p className="font-medium text-18px text-black/70 mb-2.5">
            بلوزة قطنية بيضاء
          </p>

          <div className="join drop-shadow gap-2">
            <input
              className="join-item btn btn-outline border !size-7  border-black/30 font-light text-18px text-black"
              type="radio"
              name="radio-15"
              aria-label="xs"
              onChange={handleSize}
            />
            <input
              className="join-item btn btn-outline border !size-7 border-black/30 font-light text-18px text-black"
              type="radio"
              name="radio-15"
              aria-label="S"
            />
            <input
              className="join-item btn btn-outline border !size-7 border-black/30 font-light text-18px text-black"
              type="radio"
              name="radio-15"
              aria-label="M"
            />
            <input
              className="join-item btn btn-outline border !size-7 border-black/30 font-light text-18px text-black"
              type="radio"
              name="radio-15"
              aria-label="XL"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-18px text-primary mb-2.5 whitespace-nowrap">
            800 ج.م
          </p>
          <p className="font-normal text-13px text-primary whitespace-nowrap">
            800 ج.م
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
