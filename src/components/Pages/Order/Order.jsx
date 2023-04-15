import Card from "../Card/Card";
import React from "react";
import { Context } from "../../../context";

const Order = () => {
    const {cartDrawer} = React.useContext(Context)

    return (
        <>
        {cartDrawer.length ? <h1 className="content">Мои заказы: {cartDrawer.length}</h1> : <h1 className="content">Заказов нет</h1>}
        <div className="content-card">{cartDrawer.map(el => 
        
        <Card 
            id={el.id}
            price={el.price}
            title={el.title}
            image={el.image}
            key={el.id}
            favorited={true}
            
        />
            )}
        </div>
        </>
    )
}
export default Order;