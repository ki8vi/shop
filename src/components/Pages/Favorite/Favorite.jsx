import Card from "../Card/Card";

const Favorite = ({favor}) => {

    return (
        <div className="content-card">{favor.map(el => 
            <Card 
                id={el.id}
                price={el.price}
                title={el.title}
                image={el.image}
                key={el.id}
            />
        )}</div>
    )
}
export default Favorite;