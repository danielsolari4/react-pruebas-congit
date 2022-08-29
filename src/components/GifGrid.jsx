import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10);

    //sirve para disparar efectos secundarios useEffect
    //Esta fuera de la reedibujacion jaja , si le dejo el arreglo de dependencias vacias, el segundo argumento se dispara solo una vez

    useEffect( ()=>{
        getGifs(category);
    },[] )

    return (
        <>
            <h1>{category}</h1>
            <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button>

        </>)
}