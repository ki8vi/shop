
import Content from "./components/Content";
import Header from "./components/Header";
import Drawer from "./components/Pages/Drawer/Drawer";
import "./index.scss";
import React from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom"
import Favorite from "./components/Pages/Favorite/Favorite";
import { Context } from "./context";


function App() {
  const [isDrawer, setIsDrawer] = React.useState()
  const [items, setItems] = React.useState([])
  const [cartDrawer, setCartDrawer] = React.useState([])
  const [favor, setFavor] = React.useState([])
  const [search, setSearch] = React.useState('')

  const addFavor = (obj) => {
    // let isIn = true
    // favor.forEach(el => {
    //   if(el.id === obj.id) {
    //     isIn = false
    //   }
    // })
    //   if (isIn) {
    //     setFavor(prev => [...prev, obj])
    //   }
    
    if(favor.find((favObj) => favObj.id === obj.id)) {
      setFavor((prev) => prev.filter(el => el.id !== obj.id))
    } else {
      setFavor(prev => [...prev, obj])
    }
  }
  
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

let totalSum = 0

const addCart = (obj) => {
  
  // totalSum += obj.price

  // let isInArr = false
  // cartDrawer.forEach(el => {
  //   if(el.id === obj.id) {
  //     isInArr = true
  //   }
    
  // })
  //   if (!isInArr) {
  //     setCartDrawer(prev => [...prev, obj]) 
  //   }
  if(cartDrawer.find((item) => item.id === obj.id)) {
    setCartDrawer((prev) => prev.filter(el => el.id !== obj.id))
  } else {
    setCartDrawer(prev => [...prev, obj])
    totalSum += obj.price
  }
}

const removeCart = (id) => {
  
  setCartDrawer((prev) => prev.filter(el => el.id !== id))
   
}
const isItemAdded = (id) => {
  return cartDrawer.some(obj => obj.id === id)
}

  return (
    <Context.Provider value={{items, cartDrawer, favor, isItemAdded}}>
    <div className="wrapper" >
    {isDrawer && <Drawer drawer = {isDrawer} handle= {()=>setIsDrawer(!isDrawer)} cart={cartDrawer} removeCart={removeCart} totalSum={totalSum} /> }
    
      <Header drawer = {isDrawer} handle = {()=> setIsDrawer(!isDrawer)}/>
    <Routes> 
      <Route path="/" element=<Content items= {items} addCart={addCart} onChangeSearch={onChangeSearch} search={search} setSearch={setSearch} addFavor={addFavor}/> />
      <Route path="/favorite" element=<Favorite favor={favor} addFavor={addFavor} addCart={addCart}/>/>
    </Routes>
    
    
    </div>
    </Context.Provider>
  );
}

export default App;
