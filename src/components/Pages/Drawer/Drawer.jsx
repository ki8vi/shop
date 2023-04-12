import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Drawer.module.scss";
import { Context } from "../../../context";
import React from "react";


const Drawer = ({handle, removeCart, cartDrawer}) => {
const {setCartDrawer, orderCount} = React.useContext(Context)

const [order, setOrder] = React.useState()

const orderComplete = () => {
  setCartDrawer([]);
  if(cartDrawer.length !== 0) {
    setOrder(true)
  }
}

  return (
    <div className={styles.overlay} onClick={()=>handle(false)} >
      <div className={styles.drawer} onClick={e => e.stopPropagation()}>
        <div className={styles.drawerCancel} onClick={handle}>
          {cartDrawer.length ? <h2>В корзине товаров: {cartDrawer.length}</h2> : <h2>В корзине ничего нет</h2>}
          <AiOutlineCloseCircle />
        </div>
        {cartDrawer.map((el, i) => ( 
          <div key={i} className={styles.drawerItem} >
            <img src={el.image} alt="drawer-item"/>
            <div className="drawer-item-btn" >
              <p>{el.title}</p>
              <b>{el.price}</b>
            </div>
            <AiOutlineCloseCircle onClick={()=>{removeCart(el)}}/>
          </div>
          
          )
          
        )}
        

        <div className={styles.items}>
          <ul>
            <li>
              <span>Итого:</span>
              <b>{orderCount}</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <b>{orderCount*5/100}</b>
            </li>
          </ul>
          <button onClick={orderComplete} disabled={order}>Оформить заказ</button>
        </div>
      {order && 
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", marginTop: 50}}>
      <h2>Заказ оформлен</h2> 
      <img src="img/orderComplete.png" alt="orderComplete"/>
      </div>
      }
      </div>
    </div>
  );
};
export default Drawer;
