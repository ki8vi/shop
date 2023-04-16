import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {GrFavorite} from "react-icons/gr";
import { Link } from "react-router-dom";
import { useCart } from "./Hooks/useCart";

const Header = ({drawer, handle}) => {
const {totalSum} = useCart()
  
    return (
    <header className="header">
        <Link to="/">
        <div className="headerLeft">
          <img src="img/logo.jpg" alt="logo"/>
          <div className="headerInfo">
            <h3>Sheer Potreb Shop</h3>
            
            {/* <p>Great place</p> */}
          </div>
        </div>
        </Link>
        <ul className="headerRight">
          <Link to="/favorite"><GrFavorite className="svg" /></Link>
          <li className="drawerBtn" onClick={handle}>
            
            <MdOutlineShoppingCart />
            <span>{totalSum}</span>
          </li>
          <li>
          <Link to="/orders">
            <CgProfile className="prof"/>
          </Link>
            
          </li>
        </ul>
    </header>
    )
}
export default Header;