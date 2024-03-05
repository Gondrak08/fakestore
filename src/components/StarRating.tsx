"use client";
import { Rating } from "@/interfaces";
import ReactStars from "react-rating-stars-component";
export default function StarRating({ rating }: { rating: Rating }) {
  return (
    <ReactStars
      count={5}
      size={24}
      isHalf={true}
      value={rating.rate}
      edit={false}
      activeColor="#ffd700"
    />
  );
}
