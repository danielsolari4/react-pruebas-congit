import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    


    //sirve para disparar efectos secundarios useEffect
    //Esta fuera de la reedibujacion jaja , si le dejo el arreglo de dependencias vacias, el segundo argumento se dispara solo una vez

    const getGifsAsync = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        

    }


    useEffect(() => {
        //Una forma de traerme los gifs sin usar async dentro del userEffect que no lo permite
        // getGifs(category)
        //     .then(newImages => setImages(newImages));

        //Otra forma:
        getGifsAsync();
    }, [])

    return (
        <>
            <h1>{category}</h1>
            <div className="card-grid">

                {
                    //desesctructuro el parametro
                    images.map(( image ) =>
                        <GifItem 
                            key={image.key}
                            { ...image }
                        ></GifItem>
                    )
                }
            </div>
        </>)
}