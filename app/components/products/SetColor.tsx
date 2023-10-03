import {
  CartProduct,
  SelectedImg,
} from "@/app/product/[productId]/ProductDetails";

interface SetColorProps {
  images: SelectedImg[];
  cartProduct: CartProduct;
  handleColorSelect: (value: SelectedImg) => void;
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-2">
          {images.map((image) => {
            return (
              <div
                key={image.colorCode}
                onClick={() => handleColorSelect(image)}
                className={`
                  h-7 w-7 rounded-full border-[2px] ${
                    cartProduct.selectImg.colorCode === image.colorCode
                      ? "border-teal-500"
                      : "border-none"
                  } flex justify-center items-center
                `}
              >
                <div
                  className="w-5 h-5 rounded-full border-slate-300"
                  style={{
                    backgroundColor: image.colorCode,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
