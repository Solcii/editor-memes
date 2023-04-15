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
    background: 'black',
    fontFamily: 'Arial',
    image: null,
    topText: {
      text: '',
      size: 12,
      color: 'black',
      align: 'center',
      position: 10
    },
    bottomText: {
      text: '',
      size: 12,
      color: 'black',
      align: 'center',
      position: 10
    }
  }
  const [memeConfig, setMemeConfig] = useState(defaultConfigs);

  const setBackground = (code) =>{
    setMemeConfig({...memeConfig,background:code});
  }

  const setFontFamily = (font) => {
    setMemeConfig({...memeConfig,fontFamily:font});
  }

  const setImage = (name) => {
    setMemeConfig({...memeConfig,image:name});
  }

  const setTopText = (value) =>{
    setMemeConfig({...memeConfig,topText:{...memeConfig.topText, text:value}});
  }

  return (
    <div className="App">
      <AppTitle />
      <MainToolsPanel setBackground={setBackground} setFontFamily={setFontFamily} />
      <ImagesList setImage={setImage} />
      <TextEditor setTopText={setTopText} />
      <MemeBoard configs={memeConfig} />
      <Footer />
    </div>
  );
}

export default App;
