import './MemeBoard.css';

const MemeBoard = () => {
    return (
        <div className="result-meme">
            <figure id='exportable-meme'>
                <p className="superior-text"></p>
                <img src="" alt='meme'/>
                <p className="inferior-text"></p>
            </figure>
            <button type='button'>Descargar meme</button>
        </div>
    )
}

export default MemeBoard;