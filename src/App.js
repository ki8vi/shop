
import Content from "./components/Content";
import Header from "./components/Header";
import Drawer from "./components/Pages/Drawer/Drawer";
import "./index.scss";
import React from "react";
import axios from "axios"
function App() {
  const [isDrawer, setIsDrawer] = React.useState()
  const [items, setItems] = React.useState([])
  const [cartDrawer, setCartDrawer] = React.useState([])
  const [search, setSearch] = React.useState('')


  const onChangeSearch = (e) => {
    setSearch(e.target.value)

    
  }

//axios.get('https://64245d6647401740433a27a0.mockapi.io/items')
  

  
React.useEffect(() => {
  // fetch('https://fakestoreapi.com/products').then((res) => {
  //   return res.json();
  // }).then((json) => {
  //   setItems(json)
  // })

  axios.get('https://fakestoreapi.com/products')
  .then((res) => {
    setItems(res.data)
  })

}, []);



const addCart = (obj) => {
  
  let isInArr = false
  cartDrawer.forEach(el => {
    if(el.id === obj.id) {
      isInArr = true
    }
    
  })
    if (!isInArr) {
      setCartDrawer(prev => [...prev, obj]) 
    }
}

const removeCart = (id) => {
  
  setCartDrawer((prev) => prev.filter(el => el.id !== id))
 
   
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
