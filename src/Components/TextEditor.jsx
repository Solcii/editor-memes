import "./TextEditor.css";

const TextTools = (props) => {
  const handleFontSize =(e)=>props.setTextAttr(props.elem, 'size', `${e.target.value}px`);

  const handleColor = (e) => props.setTextAttr(props.elem, 'color', e.target.value);

  const handleAlign = (value) => props.setTextAttr(props.elem, 'align', value);

  const handlePosition = (action) => props.setTextAttr(props.elem, 'position', action)

  return (
    <div className="tools-container">
      <div className="tool font-size">
        <label>Tamaño</label>
        <input type="range" min={12} max={60} onChange={(e)=>handleFontSize(e)} />
      </div>
      <div className="tool color">
        <label>Color</label>
        <input type="color" onChange={(e)=> handleColor(e)} />
      </div>
      <div className="tool align">
        <label>Alineación</label>
        <div>
          <button type="button" onClick={(e)=>handleAlign('left')}>
            <i className="fa-solid fa-align-left"></i>
          </button>
          <button type="button" onClick={(e)=>handleAlign('center')}>
            <i className="fa-solid fa-align-center"></i>
          </button>
          <button type="button" onClick={(e)=>handleAlign('right')}>
            <i className="fa-solid fa-align-right"></i>
          </button>
        </div>
      </div>
      <div className="tool position">
        <label>Altura</label>
        <div>
          <button type="button" onClick={()=>handlePosition('up')}>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button type="button" onClick={()=>handlePosition('down')}>
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const InputContainer = (props) => {
  const handleTextChange = (e) => props.setTextAttr(props.elem, 'text', e.target.value)

  return (
    <div className={`input-container input_${props.elem}`}>
      {props.elem === 'topText' ? (
        <label>Inserte su texto superior:</label>
      ) : (
        <label>Inserte su texto inferior:</label>
      )}
      <input type="text" onChange={(e)=> handleTextChange(e)} />
    </div>
  );
};

const TextEditor = (props) => {
  return (
    <div className="step-container">
      <h2 className="step-subtitle">PASO 3. Añade texto a tu meme</h2>
      <div className="step-main-container">
        <div className="text-editor-container">
            <InputContainer elem={'topText'} setTextAttr={props.setTextAttr} />
            <TextTools elem={'topText'} setTextAttr={props.setTextAttr}/>
          </div>
          <div className="text-editor-container">
            <InputContainer elem={'bottomText'} setTextAttr={props.setTextAttr} />
            <TextTools elem={'bottomText'} setTextAttr={props.setTextAttr}/>
          </div>
      </div>
    </div>
  );
};

export default TextEditor;
