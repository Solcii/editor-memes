import "./App.css";
import AppTitle from "./components/AppTitle";
import Footer from "./components/Footer";
import ImagesList from "./components/ImagesList";
import MainToolsPanel from "./components/MainToolsPanel";
import MemeBoard from "./components/MemeBoard";
import TextEditor from "./components/TextEditor";
import React, { useState } from "react";

function App() {
  const defaultConfigs = {
    background: 'white',
    fontFamily: 'Arial',
    image: null,
    topText: {
      size: 12,
      color: 'black',
      align: 'center',
      position: 10
    },
    bottomText: {
      size: 12,
      color: 'black',
      align: 'center',
      position: 10
    }
  }
  const [memeConfig, setMemeConfig] = useState(defaultConfigs);

  const setImage = (name) => {
    setMemeConfig({...memeConfig,image:name});
  }

  return (
    <div className="App">
      <AppTitle />
      <MainToolsPanel />
      <ImagesList setImage={setImage} />
      <TextEditor />
      <MemeBoard configs={memeConfig} />
      <Footer />
    </div>
  );
}

export default App;
