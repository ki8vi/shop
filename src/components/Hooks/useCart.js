import { Context } from "../../context"
import React from "react"

export const useCart = () => {
    const {cartDrawer} = React.useContext(Context);
    const totalSum = cartDrawer.reduce((sum, obj) => sum + obj.price, 0).toFixed(2);
    
    return {totalSum};
}