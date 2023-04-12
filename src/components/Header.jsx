import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {GrFavorite} from "react-icons/gr";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context";

const Header = ({drawer, handle}) => {
const {orderCount} = useContext(Context)
  
    return (
    <header className="header">
        <Link to="/">
        <div className="headerLeft">
          <img src="img/logo.jpg" alt="logo"/>
          <div className="headerInfo">
            <h3>Sheer Potreb Shop <b style={{"color": "red"}}>Almaty</b></h3>
            
            {/* <p>Great place</p> */}
          </div>
        </div>
        </Link>
        <ul className="headerRight">
          <Link to="/favorite"><GrFavorite className="svg" /></Link>
          <li className="drawerBtn" onClick={handle}>
            
            <MdOutlineShoppingCart />
            <span>{orderCount}</span>
          </li>
          <li>
            <CgProfile />
          </li>
        </ul>
    </header>
    )
}
export default Header;