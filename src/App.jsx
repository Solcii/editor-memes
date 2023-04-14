import './App.css';
import AppTitle from './components/AppTitle';
import ImagesList from './components/ImagesList';
import MainToolsPanel from './components/MainToolsPanel';
import MemeBoard from './components/MemeBoard';
import TextEditor from './components/TextEditor';


function App() {
  return (
    <div className="App">
      <AppTitle/>
      <MainToolsPanel/>
      <ImagesList/>
      <TextEditor/>
      <MemeBoard/>
    </div>
  );
}

export default App;
