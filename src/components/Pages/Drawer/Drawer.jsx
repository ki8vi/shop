import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Drawer.module.scss";

const Drawer = ({drawer, handle}) => {
  const closeDrawer = () => {
    
    handle(!drawer)
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerCancel} onClick={closeDrawer}>
          <h2>Корзина</h2>
          <AiOutlineCloseCircle />
        </div>
        <div className={styles.drawerItem}>
          <img src="/img/laptop.jpeg" alt="drawer-item" />
          <div className="drawer-item-btn">
            <p>lenovo</p>
            <b>1500$</b>
          </div>
          <AiOutlineCloseCircle />
        </div>
        <div className={styles.items}>
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
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
