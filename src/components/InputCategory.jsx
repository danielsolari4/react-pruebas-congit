import { useState } from "react";

export const InputCategory = ({ addCategory,setInputValueDos }) => {

    const [inputValue, setInputValue] = useState('');

    const captureInputText = (e) => {
        setInputValue(e.target.value);
        //console.log(e);

        setInputValueDos(e.target.value);
    }

    const onSubmit = (e) => {
        debugger;
        e.preventDefault();
        addCategory(inputValue);
    }

    return (<>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder={inputValue}
                onChange={captureInputText} />
        </form>

    </>)
}