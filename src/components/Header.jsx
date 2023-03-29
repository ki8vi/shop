import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = ({drawer, handle}) => {
  
  
    return (
    <header className="header">
        <div className="headerLeft">
          <img src="https://img.freepik.com/free-vector/creative-computer-logo-template_23-2149213537.jpg?w=2000" alt="logo"/>
          <div className="headerInfo">
            <h3>Shop</h3>
            <p>Great computer shop</p>
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