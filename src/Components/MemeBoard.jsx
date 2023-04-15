import "./MemeBoard.css";
import html2canvas from "html2canvas";

const MemeBoard = (props) => {

  const meme = document.querySelector('#exportable-meme');

  const exportMeme = (e) => {
    html2canvas(meme).then(function (
      canvas
    ) {
      let img = canvas.toDataURL("memes_images/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  if(meme){
    const topText = meme.querySelector(".top-text");
    const bottomText = meme.querySelector(".bottom-text");
    if(props.configs.background && meme){
      meme.style.background = props.configs.background;
    }
    if(props.configs.fontFamily){
      meme.style.fontFamily = `${props.configs.fontFamily}, sans-serif`;
    }
    if(props.configs.topText.size){
      topText.style.fontSize = props.configs.topText.size;
    }
    if(props.configs.topText.color){
      topText.style.color = props.configs.topText.color;
    }
    if(props.configs.topText.align){
      topText.style.alignItems  = props.configs.topText.align;
    }
    if(props.configs.topText.position){
      topText.style.top = props.configs.topText.position;
    }
    if(props.configs.bottomText.size){
      bottomText.style.fontSize = props.configs.bottomText.size;
    }
    if(props.configs.bottomText.color){
      bottomText.style.color = props.configs.bottomText.color;
    }
    if(props.configs.bottomText.align){
      bottomText.style.alignItems  = props.configs.bottomText.align;
    }
    if(props.configs.bottomText.position){
      bottomText.style.bottom = props.configs.bottomText.position;
    }
  }

  return (
    <div className="result-meme">
      <figure id="exportable-meme">
        <p className="top-text">{props.configs.topText.text}</p>
        {props.configs.image && <img src={props.configs.image} alt="meme" />}
        <p className="bottom-text">{props.configs.bottomText.text}</p>
      </figure>
      <button type="button" onClick={exportMeme}>
        Descargar meme
      </button>
    </div>
  );
};

export default MemeBoard;
