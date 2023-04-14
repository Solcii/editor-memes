import './App.css';
import AppTitle from './components/AppTitle';
import ImagesList from './components/ImagesList';
import MainToolsPanel from './components/MainToolsPanel';
import TextEditor from './components/TextEditor';


function App() {
  return (
    <div className="App">
      <AppTitle/>
      <MainToolsPanel/>
      <ImagesList/>
      <TextEditor/>
    </div>
  );
}

export default App;
