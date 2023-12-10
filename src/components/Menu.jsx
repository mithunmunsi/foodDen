import { useState } from 'react';
import Pizza from './Pizza';
import { pizzaData } from '../../public/data';

const Menu = (props) => {
  const [menus, setMenus] = useState([...pizzaData]);

  return (
    <>
      <main className="menu">
        <h2>Food Menu</h2>
        <ul className="pizzas">
          {menus
            .filter((pizza) =>
              pizza.name.toLowerCase().includes(props.searchKey)
            )
            .map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
        </ul>
      </main>
    </>
  );
};

export default Menu;
