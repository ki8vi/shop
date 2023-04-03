import Card from "./Pages/Card/Card";
import { CiSearch } from "react-icons/ci"


const Content = ({items, addCart, onChangeSearch}) => {
    
    return (
        <>
            <div className="content">
                <h1>Welcome...</h1>
                <div className="search">
                    <CiSearch />
                    <input placeholder="поиск..." onChange={onChangeSearch}/>
                </div>
           
            </div>
            <div className="content-card">
                {items.map((el) =>
                   <Card 
                    id={el.id}
                    price={el.price}
                    description={el.description}
                    title={el.title}
                    image={el.image}
                    key={el.id}
                    
                    onPlus={(items) => addCart(items)}
                   />
                )}
                
              
            </div>
        </>
        
    )
}
export default Content;