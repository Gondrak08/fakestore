import { Rating } from "@/interfaces";
import { IoMdStar } from "react-icons/io";

const RateProduct = ({ rate }: { rate: Rating }) => {
  const MAX_RATING = 5;
  const percentage = (rate.rate / MAX_RATING) * 100;

  const calculateColor = () => {
    if (percentage <= 50) {
      const red = Math.round(255 * (percentage / 50));
      const green = Math.round(255 - (percentage / 50) * 255);
      return `rgb(${red}, ${green}, 0)`;
    } else {
      const yellow = Math.round(255 * ((percentage - 50) / 50));
      return `rgb(255, ${yellow}, 0)`;
    }
  };
  const rateColor = {
    color: calculateColor(),
  };
  return (
    <div className="text-sm flex items-center justify-center z-20 absolute top-1 right-0">
      <span className="drop-shadow-md" style={rateColor}>
        {rate.rate}/5
      </span>
      <IoMdStar style={rateColor} />
    </div>
  );
};

export default RateProduct;
