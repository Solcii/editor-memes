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

  const setBottomText = (value) =>{
    setMemeConfig({...memeConfig,bottomText:{...memeConfig.bottomText, text:value}});
  }

  const setTopTextSize = (fsize) =>{
    setMemeConfig({...memeConfig,topText:{...memeConfig.topText, size:fsize}});
  }

  const setBottomTextSize = (fsize) =>{
    setMemeConfig({...memeConfig,bottomText:{...memeConfig.bottomText, size:fsize}});
  }

  const setTopTextColor = (code) =>{
    setMemeConfig({...memeConfig,topText:{...memeConfig.topText, color:code}});
  }

  const setBottomTextColor = (code) =>{
    setMemeConfig({...memeConfig,bottomText:{...memeConfig.bottomText, color:code}});
  }

  const setTopTextAlign = (newAlign) =>{
    setMemeConfig({...memeConfig,topText:{...memeConfig.topText, align:newAlign}});
  }

  const setBottomTextAlign = (newAlign) =>{
    setMemeConfig({...memeConfig,bottomText:{...memeConfig.bottomText, align:newAlign}});
  }

  const setTopTextPosition = (top) =>{
    setMemeConfig({...memeConfig,topText:{...memeConfig.topText, position:top}});
  }

  const setBottomTextPosition = (bottom) =>{
    setMemeConfig({...memeConfig,bottomText:{...memeConfig.bottomText, position:bottom}});
  }

  return (
    <div className="App">
      <AppTitle />
      <MainToolsPanel setBackground={setBackground} setFontFamily={setFontFamily} />
      <ImagesList setImage={setImage} />
      <TextEditor setTopText={setTopText} setBottomText={setBottomText} setTopTextSize={setTopTextSize} setBottomTextSize={setBottomTextSize} setTopTextColor={setTopTextColor} setBottomTextColor={setBottomTextColor} setTopTextAlign={setTopTextAlign} setBottomTextAlign={setBottomTextAlign} setTopTextPosition={setTopTextPosition} setBottomTextPosition={setBottomTextPosition}/>
      <MemeBoard configs={memeConfig} />
      <Footer />
    </div>
  );
}

export default App;
