export const InputCategory = () => {

    const [inputValue, setInputValue] = useState(false);

    const captureInputText = (e) => {
        setInputValue(e.target.value);
        //console.log(e);
    }

    const onSubmit = (e) =>{

        e.preventDefault();
        
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