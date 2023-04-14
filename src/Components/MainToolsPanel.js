import './MainToolsPanel.css';

const MainToolsPanel = () =>{
    return(
        <div className='step-container'>
            <h2 className='step-subtitle one'>PASO 1. Configuraciones básicas</h2>
            <div className="main-tool-panel">
                <div className='tool-container'>
                    <label className="tool-label" for="background-color">Fondo:</label>
                    <input type="color" name="background-color"/>
                </div>
                <div className='tool-container'>
                    <label className="tool-label" for="font-family">Letra:</label>
                    <select name="font-family">
                        <option value={'Arial'}>Arial</option>
                        <option value={'Montserrat'}>Montserrat</option>
                        <option value={'Comic Sans MS'}>Comic Sans MS</option>
                        <option value={'Helvetica'}>Helvetica</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default MainToolsPanel;
