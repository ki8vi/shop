
import Content from "./components/Content";
import Header from "./components/Header";
import Drawer from "./components/Pages/Drawer/Drawer";
import "./index.scss";
import React from "react";

function App() {
  const [isDrawer, setIsDrawer] = React.useState()
  const [items, setItems] = React.useState([])
  const [cartDrawer, setCartDrawer] = React.useState([])
  const [search, setSearch] = React.useState('')


  const onChangeSearch = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
    
  }


  
React.useEffect(() => {
  fetch('https://fakestoreapi.com/products').then((res) => {
    return res.json();
  }).then((json) => {
    setItems(json)
  })
}, []);

const addCart = (obj) => {
  setCartDrawer(prev => [...prev, obj])
  
}

const removeCart = () => {
  setCartDrawer(cartDrawer.map((el, i) => el.id === i ))
}


  return (
    <div className="wrapper" >
    {isDrawer && <Drawer drawer = {isDrawer} handle= {()=>setIsDrawer(!isDrawer)} cart={cartDrawer} removeCart={removeCart}/>}
    <Header drawer = {isDrawer} handle = {()=> setIsDrawer(!isDrawer)}/>
    <Content items= {items} addCart={addCart} onChangeSearch={onChangeSearch} search={search} setSearch={setSearch} /> 
    </div>
  );
}

export default App;
