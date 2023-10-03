"use client";

import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectImg: SelectedImg;
  quantity: number;
  price: number;
};

export type SelectedImg = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProduct>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectImg: {
      ...product.images[0],
    },
    quantity: 1,
    price: product.price,
  });

  const productRating =
    product.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImg) => {
      setCartProduct((prev) => ({
        ...prev,
        selectImg: value,
      }));
    },
    [cartProduct.selectImg]
  );

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  }, [cartProduct.quantity]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => ({
      ...prev,
      quantity: prev.quantity - 1,
    }));
  }, [cartProduct.quantity]);

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-sm text-slate-500">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span>
          <span> {product.category}</span>
        </div>
        <div>
          <span className="font-semibold">BRAND:</span>
          <span> {product.brand}</span>
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In Stoke" : "Out of Stock"}
        </div>
        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartCounter={cartProduct.quantity}
          cartProduct={cartProduct}
          handleQuantityIncrease={handleQtyIncrease}
          handleQuantityDecrease={handleQtyDecrease}
        />
        <Horizontal />
        <div>add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
