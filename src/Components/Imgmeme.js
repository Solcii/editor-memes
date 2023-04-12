import React, {useState} from 'react';

const Imgmeme = () => {

    const [textomeme, setTextomeme] = useState();
    
    const textmeme = (e) =>{
        setTextomeme(e.target.value)
    }

    return(
        <div>
            <h1>Edita tu propio meme</h1>
            <h2>Escribe tu frase</h2>
            <input onChange={textmeme}></input>
            <h2>Elije la imagen para tu meme</h2>
            <select>
                <option value={6}>A</option>
                <option value={7}>B</option>
                <option value={8}>C</option>
                <option value={9}>D</option>
            </select>
        </div>
    )
}
export default Imgmeme;