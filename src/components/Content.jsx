import Card from "./Pages/Card/Card";
import { CiSearch } from "react-icons/ci"
import { MdCancel } from "react-icons/md"

const Content = ({items, addCart, onChangeSearch, search, setSearch, addFavor}) => {
    
    return (
        <>
            <div className="content">
                {search ? <h1>Поиск по: {search}</h1> : <h1>Welcome...</h1>}
                <div className="search">
                    <CiSearch />
                    <input placeholder="поиск..." onChange={onChangeSearch} value={search}/>
                    {search && <MdCancel  onClick={()=>setSearch("")} style={{cursor: "pointer"}}/>}
                </div>
            </div>
            <div className="content-card">
                {items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((el) =>
                    <Card 
                    id={el.id}
                    price={el.price}
                    description={el.description}
                    title={el.title}
                    image={el.image}
                    key={el.id}
                    onPlus={(obj) =>addCart(obj)}
                    addFavor={(obj)=>addFavor(obj)}
                
                    />
                )}
                
            </div>
        </>
        
    )
}
export default Content;