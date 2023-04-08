import { TiPlusOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa"
import styles from "./Card.module.scss"
import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";


const Card = ({image, title, price, id, onPlus}) => {
    const [isAdded, setIsAdded] = React.useState();
    const [isFavor, setIsFavor] = React.useState();
    const iLike = () => {
        setIsFavor(!isFavor)
    }
    
    const setFavorite = () => {
        onPlus({image, title, price, id})
        setIsAdded(!isAdded)
        
    };
    
    

    return (
        <div className={styles.card} >
            <div onClick={iLike}>{isFavor ? <FcLike/> : <FcLikePlaceholder />}</div>
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