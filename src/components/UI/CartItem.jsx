import { currencyFormatter } from '../../util/formatting';

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p className="cart-item-info">
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <div className="cart-item-actions">
        <button className="cart-item-button" onClick={onDecrease}>
          -
        </button>
        <span className="cart-item-quantity">{quantity}</span>
        <button className="cart-item-button" onClick={onIncrease}>
          +
        </button>
      </div>
    </li>
  );
}
