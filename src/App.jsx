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
      position: 20
    },
    bottomText: {
      text: '',
      size: 12,
      color: 'black',
      align: 'center',
      position: 20
    }
  }
  const [memeConfig, setMemeConfig] = useState(defaultConfigs);

  const setGlobalConfig = (attr, value) =>{
    setMemeConfig({...memeConfig,[attr]:value})
  }

  const setTextAttr = (key, attr, value) =>{
    setMemeConfig({...memeConfig,[key]:{...memeConfig[key], [attr]:value}});
  }

  return (
    <div className="App">
      <AppTitle />
      <MainToolsPanel setGlobalConfig={setGlobalConfig} />
      <ImagesList setGlobalConfig={setGlobalConfig} />
      <TextEditor memeConfig={memeConfig} setTextAttr={setTextAttr}/>
      <MemeBoard configs={memeConfig} />
      <Footer />
    </div>
  );
}

export default App;
