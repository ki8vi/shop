import { GoPlus } from "react-icons/go"
const Card = () => {
    return (
        <div className="card">
            <img src="/img/laptop.jpeg" alt="item"/>
            <p>lenovo</p>
            <div className="card-button">
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