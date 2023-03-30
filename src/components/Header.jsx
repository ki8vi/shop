import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = ({drawer, handle}) => {
  
  
    return (
    <header className="header">
        <div className="headerLeft">
          <img src="img/logo.jpg" alt="logo"/>
          <div className="headerInfo">
            <h3>Sheer Potreb Shop</h3>
            
            {/* <p>Great place</p> */}
          </div>
        </div>
        <ul className="headerRight">
          <li className="drawerBtn" onClick={handle}>
            <MdOutlineShoppingCart />
            <span>500$</span>
          </li>
          <li>
            <CgProfile />
          </li>
        </ul>
    </header>
    )
}
export default Header;