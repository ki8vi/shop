import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Drawer.module.scss";

const Drawer = ({handle, cart=[]}) => {




  return (
    <div className={styles.overlay} onClick={()=>handle(false)} >
      <div className={styles.drawer} onClick={e => e.stopPropagation()}>
        <div className={styles.drawerCancel} onClick={handle}>
          <h2>Корзина</h2>
          <AiOutlineCloseCircle />
        </div>
        {cart.map(el => (
          <div className={styles.drawerItem}>
            <img src={el.image} alt="drawer-item"/>
            <div className="drawer-item-btn">
              <p>{el.title}</p>
              <b>{el.price}</b>
            </div>
            <AiOutlineCloseCircle />
          </div>
          
        )
          
        )}
        

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
