import './TextEditor.css';

const TextTools = () =>{
    return(
        <div className='tools-container'>
            <div className='tool font-size'>
                <label>Tamaño</label>
                <input type='number'/>
            </div>
            <div className='tool color'>
                <label>Color</label>
                <input type='color'/>
            </div>
            <div className='tool align'>
                <label>Alineación</label>
                <div>
                    <button type='button'><i className="fa-solid fa-align-left"></i></button>
                    <button type='button'><i className="fa-solid fa-align-center"></i></button>
                    <button type='button'><i className="fa-solid fa-align-right"></i></button>
                </div>
            </div>
            <div className='tool position'>
                <label>Altura</label>
                <div>
                    <button type='button'><i className="fa-solid fa-arrow-up"></i></button>
                    <button type='button'><i className="fa-solid fa-arrow-down"></i></button>
                </div>
            </div>
        </div>
    )
}

const InputContainer = (props) =>{
    return(
        <div className={`input-container input_${props.index}`}>
            {props.index === 1 ? <label>Inserte su texto superior:</label> : <label>Inserte su texto inferior:</label>}
            <input type="text"/>
        </div>
    )
}

const TextEditor = () =>{
    const text = Array(2).fill(1)
    return(
        <div className="step-container">
            <h2 className='step-subtitle one'>PASO 3. Añade texto a tu meme</h2>
            <div className='step-main-container'>
                {text.map((_, i)=>
                <div className="text-editor-container" key={i}>
                    <InputContainer index={i+1}/>
                    <TextTools/>
                </div>)}
            </div>
        </div>
    )
}

export default TextEditor;