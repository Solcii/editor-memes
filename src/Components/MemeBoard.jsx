import "./MemeBoard.css";
import html2canvas from "html2canvas";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MemeBoard = (props) => {
  const meme = document.querySelector("#exportable-meme");

  const HandleClick = () =>{
    if (!meme) {
      const MySwal = withReactContent(Swal);
      MySwal.fire("¡Debes configurar tu meme primero!");
      return;
    }
    exportMeme()
  }

  const exportMeme = () => {
    html2canvas(meme).then(function (canvas) {
      let img = canvas.toDataURL("memes_images/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  const cleanClassList = (element) => {
    const options = ["left", "center", "right"];
    options.forEach((c) => {
      element.classList.remove(c);
    });
  };

  if (meme) {
    const topText = meme.querySelector(".top-text");
    const bottomText = meme.querySelector(".bottom-text");
    if (props.configs.background) {
      meme.style.background = props.configs.background;
    }
    if (props.configs.fontFamily) {
      meme.style.fontFamily = `${props.configs.fontFamily}, sans-serif`;
    }
    if (props.configs.topText.size) {
      topText.style.fontSize = `${props.configs.topText.size}px`;
    }
    if (props.configs.topText.color) {
      topText.style.color = props.configs.topText.color;
    }
    if (props.configs.topText.align) {
      cleanClassList(topText);
      topText.classList.add(props.configs.topText.align);
    }
    if (props.configs.bottomText.size) {
      bottomText.style.fontSize = `${props.configs.bottomText.size}px`;
    }
    if (props.configs.bottomText.color) {
      bottomText.style.color = props.configs.bottomText.color;
    }
    if (props.configs.bottomText.align) {
      cleanClassList(bottomText);
      bottomText.classList.add(props.configs.bottomText.align);
    }
  }

  return (
    <div className="result-meme">
      <figure id="exportable-meme">
        <p className="top-text center">{props.configs.topText.text}</p>
        {props.configs.image && <img src={props.configs.image} alt="meme" />}
        <p className="bottom-text center">{props.configs.bottomText.text}</p>
      </figure>
      <button type="button" onClick={HandleClick}>
        Descargar meme
      </button>
    </div>
  );
};

export default MemeBoard;
