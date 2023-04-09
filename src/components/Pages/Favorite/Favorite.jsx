import Card from "../Card/Card";

const Favorite = ({favor, addFavor}) => {
   
    return (
        <>
        {favor.length ? <h1 className="content">Избранное: {favor.length}</h1> : <h1 className="content">Вы ничего не добавили в избранное</h1>}
        <div className="content-card">{favor.map(el => 
        
            <Card 
                id={el.id}
                price={el.price}
                title={el.title}
                image={el.image}
                key={el.id}
                favorited={true}
                addFavor={addFavor}
                
            />
        )}
        </div>
        </>
    )
}
export default Favorite;