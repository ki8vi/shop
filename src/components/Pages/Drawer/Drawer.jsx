import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Drawer.module.scss";
import { Context } from "../../../context";
import React from "react";


const Drawer = ({handle, cart=[], removeCart, totalSum}) => {
//const context = React.useContext(Context)
  


  return (
    <div className={styles.overlay} onClick={()=>handle(false)} >
      <div className={styles.drawer} onClick={e => e.stopPropagation()}>
        <div className={styles.drawerCancel} onClick={handle}>
          {cart.length ? <h2>В корзине товаров: {cart.length}</h2> : <h2>В корзине ничего нет</h2>}
          <AiOutlineCloseCircle />
        </div>
        {cart.map((el, i) => ( 
          <div key={i} className={styles.drawerItem} >
            <img src={el.image} alt="drawer-item"/>
            <div className="drawer-item-btn" >
              <p>{el.title}</p>
              <b>{el.price}</b>
            </div>
            <AiOutlineCloseCircle onClick={() => removeCart(el.id)}/>
          </div>
          
          )
          
        )}
        

        <div className={styles.items}>
          <ul>
            <li>
              <span>Итого:</span>
              <b>{totalSum}</b>
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
