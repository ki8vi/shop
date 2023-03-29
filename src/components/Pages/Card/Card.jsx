import { TiPlusOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa"
import styles from "./Card.module.scss"
import React from "react";
const Card = () => {
    const [isAdded, setIsAdded] = React.useState();
    
    
    const setFavorite = () => {
        setIsAdded(!isAdded)
        
    }


    return (
        <div className={styles.card}>
            <img src="/img/laptop.jpeg" alt="item"/>
            <p>lenovo</p>
            <div className={styles.cardButton}>
                <span>Цена:</span>
                <b>1500$</b>
                <button onClick={setFavorite}>
                    {isAdded ? <FaCheck /> : <TiPlusOutline />}
                </button>
            </div>
        </div>
    )
}
export default Card;