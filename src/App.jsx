import './App.css';
import AppTitle from './components/AppTitle';
import ImagesList from './components/ImagesList';
import MainToolsPanel from './components/MainToolsPanel';


function App() {
  return (
    <div className="App">
      <AppTitle/>
      <MainToolsPanel/>
      <ImagesList/>
    </div>
  );
}

export default App;
