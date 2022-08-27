import { useState } from "react"
import { AddCategory } from "./AddCategory";

export default function GifApp() {

    const [categories, setCategories] = useState(['perro', 'gato'])
    //ejemplo si hubiera querido que el boton sepa el estado del input
    //const [inputValueDos, setInputValueDos] = useState('Dos');


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory))return;

        setCategories([...categories, newCategory]);
    }


    return (
        <>
            <h1>Categories</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            >
            </AddCategory>

            <ul>
                {
                    categories.map(x =>
                        (<li key={x}>{x}</li>))
                }
            </ul>


        </>
    )
}