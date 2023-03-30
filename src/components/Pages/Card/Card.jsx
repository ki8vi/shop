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
            {/* <span>{el.description}</span> */}
            <div className={styles.cardButton}>
                <b>Price: {el.price} $</b>
                <button onClick={setFavorite}>
                    {isAdded ? <FaCheck /> : <TiPlusOutline />}
                </button>
            </div>
        </div>
    )
}
export default Card;