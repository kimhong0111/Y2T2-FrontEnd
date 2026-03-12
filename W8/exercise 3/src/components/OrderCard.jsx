export default function OrderCard({ stuffs, onPlus, onMinus }) {
  return (
    <>
      {stuffs.map((element, index) => (
        <div key={index}>
          <div className="orderHead">
            <h4>{element.product}</h4>
            <small>{element.price}</small>
          </div>
          <div className="order-quantity">
            <div className="order-button">
              <button onClick={() => onMinus(index)}>-</button>
            </div>
            <h4>{element.quantity}</h4>
            <div className="order-button">
              <button onClick={() => onPlus(index)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}