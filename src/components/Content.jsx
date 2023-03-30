import Card from "./Pages/Card/Card";
import { CiSearch } from "react-icons/ci"

const Content = ({items}) => {
    
    return (
        <>
            <div className="content">
                <h1>Welcome...</h1>
                <div className="search">
                    <CiSearch />
                    <input placeholder="поиск..."/>
                </div>
           
            </div>
            <div className="content-card">
                {items.map((el) =>
                   <Card 
                    price={el.price}
                    description={el.description}
                    title={el.title}
                    image={el.image}
                    key={el.id}
                   />
                )}
                
              
            </div>
        </>
        
    )
}
export default Content;