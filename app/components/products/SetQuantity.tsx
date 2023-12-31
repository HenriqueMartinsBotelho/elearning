"use client";

interface SetQuantityProps {
  cartCounter: number;
  cartProduct: any;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCounter,
  cartProduct,
  handleQuantityIncrease,
  handleQuantityDecrease,
}) => {
  return (
    <div className="flex items-center gap-8">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex items-center gap-4 text-base">
        <button onClick={handleQuantityDecrease} className={btnStyles}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQuantityIncrease} className={btnStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
