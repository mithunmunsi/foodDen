function Pizza(props) {
  return (
    <>
      <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
          <h2>{props.pizzaObj.name}</h2>
          <p> {props.pizzaObj.ingredients} </p>
          <span>{props.pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}

export default Pizza;
