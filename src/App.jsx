import style from "./App.module.css";
import {Navbar} from "./components/Navbar";
import Presentacion from "./components/Presentacion/Presentacion";
import About from "./components/About/About";


function App() {
  

  return (
    <div className={style.App}>
      <Navbar />
      <Presentacion  />
      <About />
    </div>
  )
}

export default App
