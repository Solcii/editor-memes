import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import './Imgmeme.css'

const Imgmeme = () => {

    const [textomeme, setTextomeme] = useState();
    const [imagen, setImagen] = useState();
    
    const textmeme = (e) =>{
        setTextomeme(e.target.value)
    }

    const seleccionarImg = (e) =>{
        setImagen(e.target.value);
    }

    const exportarMeme = (e) =>{
        html2canvas(document.querySelector('#exportar')).then(function(canvas){
            let img = canvas.toDataURL('memesImg/png');
            
        })
    }

    return(
        <div>
            <h1 className='mt-5 mb-5 text-light'>Edita tu propio meme</h1>
            <h2 className='mt-2 mb-3'>Escribe tu frase</h2>
            <input onChange={textmeme} className='form-control w-25 mb-3 w-50 m-auto'></input>
            <h2 className='mt-2 mb-3'>Elije la imagen para tu meme</h2>
            <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" aria-label="Default select example">
                <option disabled>Selecciona una imagen</option>
                <option value={6}>Futurama</option>
                <option value={7}>B</option>
                <option value={8}>C</option>
                <option value={9}>D</option>
            </select>
            <figure className='text-center' id='exportar'>
                <p>{textomeme}</p>
                <img src='./memesImg/6.png' className='figure-img mt-3 d-block m-auto w-50' alt='meme'/>
            </figure>
            <button onClick={exportarMeme} type='button' className='btn btn-primary mt-4 mb-4'>Descargar meme</button>
        </div>
    )
}
export default Imgmeme;