import { useState } from "react"
import { InputCategory } from "./InputCategory";

export default function GifApp() {

    const [category, setCategory] = useState(['perro', 'gato'])

    const addCategory= () =>{
        setCategory([...category,inputValue]);
    }
    

    return (
        <>
            <h1>Categories</h1>
            
            <InputCategory addCategory={}></InputCategory>

            <ul>
                {
                    category.map(x =>
                        (<li>{x}</li>))
                }
            </ul>
            <button onClick={addCategory}>Agregar</button>
        </>
    )
}