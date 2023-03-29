
import Content from "./components/Content";
import Header from "./components/Header";
import Drawer from "./components/Pages/Drawer/Drawer";
import "./index.scss";
import React from "react";

function App() {
  const [isDrawer, setIsDrawer] = React.useState()
  
  return (
    <div className="wrapper">
     {isDrawer ? <Drawer drawer = {isDrawer} handle= {setIsDrawer}/> : null}
      <Header drawer = {isDrawer} handle = {setIsDrawer}/>
      <Content/>
    </div>
  );
}

export default App;
