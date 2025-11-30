import { useState } from "react";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import "../styles/global.css";


const App = () => {
  const [tab, setTab] = useState<"home" | "diary">("home");


  return (
    <>
      <header>
        <a
          className={tab === "home" ? "active" : ""}
          onClick={() => setTab("home")}
        >
          Главная
        </a>
        <a
          className={tab === "diary" ? "active" : ""}
          onClick={() => setTab("diary")}
        >
          Дневник
        </a>
      </header>


      {tab === "home" && <Home />}
      {tab === "diary" && <Diary />}
    </>
  );
};


export default App;