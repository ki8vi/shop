
import Content from "./components/Content";
import Header from "./components/Header";
import Drawer from "./components/Pages/Drawer/Drawer";
import "./index.scss";
import React from "react";

function App() {
  const [isDrawer, setIsDrawer] = React.useState()
  const [items, setItems] = React.useState([])
  
React.useEffect(() => {
  fetch('https://fakestoreapi.com/products/category/jewelery').then((res) => {
    return res.json();
  }).then((json) => {
    setItems(json)
  })
}, [])

  return (
    <div className="wrapper" >
     {isDrawer && <Drawer drawer = {isDrawer} handle= {()=>setIsDrawer(!isDrawer)}/>}
      <Header drawer = {isDrawer} handle = {()=> setIsDrawer(!isDrawer)}/>
      <Content items= {items}/>
    </div>
  );
}

export default App;
