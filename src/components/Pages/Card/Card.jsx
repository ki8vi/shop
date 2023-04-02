import { TiPlusOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa"
import styles from "./Card.module.scss"
import React from "react";

const Card = ({image, title, price, id, onPlus}) => {
    const [isAdded, setIsAdded] = React.useState();
    
    
    const setFavorite = () => {
        onPlus({image, title, price, id})
        setIsAdded(!isAdded)
        
    };
    
    

    return (
        <div className={styles.card}>
            <img src={image} alt="img"/>
            <p>{title}</p>
            {/* <span>{el.description}</span> */}
            <div className={styles.cardButton}>
                <b>Price: {price} $</b>
                <button onClick={setFavorite}>
                    {isAdded ? <FaCheck /> : <TiPlusOutline />}
                </button>
            </div>
        </div>
    )
}
export default Card;