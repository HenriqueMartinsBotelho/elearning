"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    data.reviews.length;

  return (
    <div className="col-span-1 cursor-pointer border-[1, 2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="relative w-full overflow-hidden aspect-square">
          <Image
            src={data.images[0].image}
            fill
            className="object-contain w-full h-full"
            alt="produto"
          />
        </div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
