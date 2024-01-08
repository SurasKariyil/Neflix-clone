import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actions, comedy, documentaries, horror, originals, romantic } from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals}title="Neflix Originals"/>
      <RowPost url={actions}title="Action Movies" isSmall/>
      <RowPost url={comedy}title="Comedy Movies" isSmall/>
      <RowPost url={romantic}title="Romantic Movies" isSmall/>
      <RowPost url={horror}title="Horror Movies" isSmall/>
      <RowPost url={documentaries} title="Documentaries" isSmall/>
    </div>
   
  );
}

export default App;
