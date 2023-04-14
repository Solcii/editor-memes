import './ImagesList.css';

const ImagesList = () =>{
    const images = Array(30).fill(0).map((_, i)=>`./memes_images/${i+1}.png`);
    return(
        <div className="step-container">
            <h2 className='step-subtitle'>PASO 2. Elije tu imagen</h2>
            <div className="images-container step-main-container">
                {images.map((v, i)=><img className="meme-image" src={v} key={v} alt={i+1}/>)}
            </div>
        </div>
    )
}

export default ImagesList;