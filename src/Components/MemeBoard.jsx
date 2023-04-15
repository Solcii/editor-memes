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
    if(props.configs.background && meme){
      meme.style.background = props.configs.background;
    }
    if(props.configs.fontFamily){
      meme.style.fontFamily = `${props.configs.fontFamily}, sans-serif`;
    }
  }

  return (
    <div className="result-meme">
      <figure id="exportable-meme">
        <p className="superior-text"></p>
        {props.configs.image && <img src={props.configs.image} alt="meme" />}
        <p className="inferior-text"></p>
      </figure>
      <button type="button" onClick={exportMeme}>
        Descargar meme
      </button>
    </div>
  );
};

export default MemeBoard;
