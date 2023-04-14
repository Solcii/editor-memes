import "./MemeBoard.css";
import html2canvas from "html2canvas";

const MemeBoard = (props) => {
  const exportMeme = (e) => {
    html2canvas(document.querySelector("#exportable-meme")).then(function (
      canvas
    ) {
      let img = canvas.toDataURL("memes_images/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

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
