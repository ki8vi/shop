import Card from "./Pages/Card/Card";
import { CiSearch } from "react-icons/ci"

const Content = () => {
    return (
        <>
            <div className="content">
                <h1>Наша продукция</h1>
                <div className="search">
                    <CiSearch />
                    <input placeholder="поиск..."/>
                </div>
           
            </div>
            <div className="content-card">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
        
    )
}
export default Content;