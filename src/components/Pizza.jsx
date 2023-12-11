function Pizza({ pizzaObj }) {
  return (
    <>
      <li className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h2>{pizzaObj.name}</h2>
          <p> {pizzaObj.ingredients} </p>
          <span className="price">{pizzaObj.price}€</span>
        </div>
      </li>
    </>
  );
}

export default Pizza;
