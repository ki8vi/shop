import { AiOutlineCloseCircle } from "react-icons/ai";
const Drawer = () => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина</h2>
        <div className="drawer-item">
          <img src="/img/laptop.jpeg" alt="drawer-item" />
          <div className="drawer-item-btn">
            <p>lenovo</p>
            <b>1500$</b>
          </div>
          <AiOutlineCloseCircle />
        </div>
        <div className="items">
          <ul>
            <li>
              <span>Итого:</span>
              <b>500$</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <b>25$</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
