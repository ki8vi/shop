import { TiPlusOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa"
import styles from "./Card.module.scss"
import React from "react";
const Card = ({...el}) => {
    const [isAdded, setIsAdded] = React.useState();
    
    
    const setFavorite = () => {
        setIsAdded(!isAdded)
        
    }
    

    return (
        <div className={styles.card}>
            <img src={el.image} alt="img"/>
            <p>{el.title}</p>
            <div className={styles.cardButton}>
                <span>{el.description}</span>
                <b>{el.price}</b>
                <button onClick={setFavorite}>
                    {isAdded ? <FaCheck /> : <TiPlusOutline />}
                </button>
            </div>
        </div>
    )
}
export default Card;