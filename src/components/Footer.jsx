const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>
              We are open from {openHour}:00 to {closeHour}:00. Come Visit us or
              order online
            </p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <p className="order">
            We are happily open between {openHour}:00 and {closeHour}:00
          </p>
        )}
        <span className="copyright">
          Copyright &copy; 2023. All Rights Reserved by GAS Coders
        </span>
      </footer>
    </>
  );
};

export default Footer;
