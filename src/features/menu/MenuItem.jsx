import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-5 py-2">
      <img
        src={imageUrl}
        className={`h-25 ${soldOut ? "opacity-70 grayscale" : ""}`}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}

          <Button type="small"> Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
