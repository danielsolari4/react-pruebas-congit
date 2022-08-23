import { useState } from "react"
import { InputCategory } from "./InputCategory";

export default function GifApp() {

    const [category, setCategory] = useState(['perro', 'gato'])

    const [inputValueDos, setInputValueDos] = useState('Dos');


    const addCategory = (value) =>{
        setCategory([...category,value]);
    }
    

    return (
        <>
            <h1>Categories</h1>
            
            <InputCategory addCategory={addCategory} setInputValueDos={setInputValueDos}></InputCategory>

            <ul>
                {
                    category.map(x =>
                        (<li>{x}</li>))
                }
            </ul>
            
            <button onClick={()=>{addCategory(inputValueDos)}}>Agregar</button>
        </>
    )
}