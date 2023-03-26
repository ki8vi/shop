import { GoPlus } from "react-icons/go";
import styles from "./Card.module.scss"
const Card = () => {
    return (
        <div className={styles.card}>
            <img src="/img/laptop.jpeg" alt="item"/>
            <p>lenovo</p>
            <div className={styles.cardButton}>
                <span>Цена:</span>
                <b>1500$</b>
                <button>
                    <GoPlus />
                </button>
            </div>
        </div>
    )
}
export default Card;