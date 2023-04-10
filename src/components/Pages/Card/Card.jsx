import { TiPlusOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa"
import styles from "./Card.module.scss"
import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import ContentLoader from "react-content-loader";

    
    const Card = ({
        image, 
        title, 
        price, 
        id, 
        onPlus, 
        addFavor,  
        favorited,
        loading 
    }) => {
    
    const [isAdded, setIsAdded] = React.useState();
    const [isFavor, setIsFavor] = React.useState(favorited);

    const iLike = () => {
        setIsFavor(!isFavor);
        addFavor({id, price, title, image, onPlus, addFavor})
    }
    
    const setFavorite = () => {
        onPlus({image, title, price, id})
        setIsAdded(!isAdded)
        
    };
    
    

    return (
        <>
        {loading ?
            <ContentLoader 
    speed={2}
    width={250}
    height={350}
    viewBox="0 0 150 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    <rect x="111" y="107" rx="0" ry="0" width="0" height="2" /> 
    <rect x="0" y="0" rx="10" ry="10" width="150" height="155" /> 
    <rect x="0" y="165" rx="4" ry="4" width="150" height="15" /> 
    <rect x="0" y="189" rx="5" ry="5" width="100" height="15" /> 
    <rect x="0" y="211" rx="5" ry="5" width="80" height="25" /> 
    <rect x="116" y="207" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
          :
        
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
        
        }
        </>
    )
}
export default Card;