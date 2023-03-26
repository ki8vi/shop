
import Content from "./components/Content";
import Header from "./components/Header";
import Drawer from "./components/Pages/Drawer/Drawer";
import "./index.scss"

function App() {
  return (
    <div className="wrapper">
      <Drawer title = "samsung"/>
      <Header />
      <Content/>
    </div>
  );
}

export default App;
