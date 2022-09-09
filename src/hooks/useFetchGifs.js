import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{
    
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    //sirve para disparar efectos secundarios useEffect
    //Esta fuera de la reedibujacion jaja , si le dejo el arreglo de dependencias vacias, el segundo argumento se dispara solo una vez
    const getGifsAsync = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setisLoading(false);
    }
    useEffect(() => {
        //Una forma de traerme los gifs sin usar async dentro del userEffect que no lo permite
        // getGifs(category)
        //     .then(newImages => setImages(newImages));
        //Otra forma:
        getGifsAsync();
    }, [])
    
    return(

        {
            images: images,
            isLoading: isLoading
        }


    )
}