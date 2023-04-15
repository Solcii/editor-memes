import "./TextEditor.css";
import { useState } from "react";

const TextTools = (props) => {
  const [selected, setSelected] = useState("center");

  const handleFontSize = (e) =>
    props.setTextAttr(props.elem, "size", e.target.value);

  const handleColor = (e) =>
    props.setTextAttr(props.elem, "color", e.target.value);

  const handleAlign = (event) => {
    props.setTextAttr(props.elem, "align", event.currentTarget.value);
    setSelected(event.currentTarget.value);
  };

  const size = props.memeConfig[props.elem].size;

  return (
    <div className={`tools-container ${props.elem}`}>
      <div className="tool font-size">
        <label>Tamaño</label>
        <input
          type="number"
          min={12}
          max={60}
          value={size}
          onChange={(e) => handleFontSize(e)}
        />
      </div>
      <div className="tool color">
        <label>Color</label>
        <input type="color" onChange={(e) => handleColor(e)} />
      </div>
      <div className="tool align">
        <label>Alineación</label>
        <div>
          <button
            type="button"
            value="left"
            className={selected === "left" ? "left selected" : "left"}
            onClick={(e) => handleAlign(e)}
          >
            <i className="fa-solid fa-align-left"></i>
          </button>
          <button
            type="button"
            value="center"
            className={selected === "center" ? "center selected" : "center"}
            onClick={(e) => handleAlign(e)}
          >
            <i className="fa-solid fa-align-center"></i>
          </button>
          <button
            type="button"
            value="right"
            className={selected === "right" ? "right selected" : "right"}
            onClick={(e) => handleAlign(e)}
          >
            <i className="fa-solid fa-align-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const InputContainer = (props) => {
  const handleTextChange = (e) =>
    props.setTextAttr(props.elem, "text", e.target.value);

  return (
    <div className={`input-container input_${props.elem}`}>
      {props.elem === "topText" ? (
        <label>Inserte su texto superior:</label>
      ) : (
        <label>Inserte su texto inferior:</label>
      )}
      <input type="text" onChange={(e) => handleTextChange(e)} />
    </div>
  );
};

const TextEditor = (props) => {
  return (
    <div className="step-container">
      <h2 className="step-subtitle">PASO 3. Añade texto a tu meme</h2>
      <div className="step-main-container">
        <div className="text-editor-container">
          <InputContainer elem="topText" setTextAttr={props.setTextAttr} />
          <TextTools
            elem="topText"
            memeConfig={props.memeConfig}
            setTextAttr={props.setTextAttr}
          />
        </div>
        <div className="text-editor-container">
          <InputContainer elem="bottomText" setTextAttr={props.setTextAttr} />
          <TextTools
            elem="bottomText"
            memeConfig={props.memeConfig}
            setTextAttr={props.setTextAttr}
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
