import { TiPlusOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa"
import styles from "./Card.module.scss"
import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";

import { Context } from "../../../context";

    
    const Card = ({
        image, 
        title, 
        price, 
        id, 
        addCart, 
        addFavor,  
        favorited,
        
    }) => {
    
    const [isAdded, setIsAdded] = React.useState();
    const [isFavor, setIsFavor] = React.useState(favorited);


    const {isItemAdded, isFavorAdded} = React.useContext(Context);
    
    const iLike = () => {
        setIsFavor(!isFavor);
        addFavor({id, price, title, image, addCart, addFavor})
    }
    
    const setFavorite = () => {
        addCart({image, title, price, id})
        setIsAdded(!isAdded)
        
    };
    
    

    return (
    
        
        
        <div className={styles.card} >
            {addCart && <div onClick={iLike}>{isFavorAdded(id) ? <FcLike/> : <FcLikePlaceholder />}</div>}
            <img src={image} alt="img"/>
            <p>{title}</p>
            {/* <span>{el.description}</span> */}
            <div className={styles.cardButton}>
                <b>Price: {price} $</b>
                {addCart &&
                    <button onClick={setFavorite}>
                    {isItemAdded(id) ? <FaCheck /> : <TiPlusOutline />}
                </button>
                }
                
            </div>
        </div>
        
        
        
    )
}
export default Card;