import style from "./App.module.css";
import {Navbar} from "./components/Navbar";
import Presentacion from "./components/Presentacion/Presentacion";


function App() {
  

  return (
    <div className={style.App}>
      <Navbar />
      <Presentacion  />
    </div>
  )
}

export default App
