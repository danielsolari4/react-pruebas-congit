import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const {isLoading, images} = useFetchGifs(category);

    return (
        <>

            {
                isLoading && <h2>Cargando...</h2>
            }
            <h1>{category}</h1>


            <div className="card-grid">
                {
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