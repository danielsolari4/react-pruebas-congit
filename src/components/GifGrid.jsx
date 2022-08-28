export const GifGrid = ({ category }) => {

    const gifs = [1, 2, 3, 4, 5, 6];


    return (<>
        <h1>{category}</h1>
        {
            gifs.map(gif => (
                <h3>{gif}</h3>
            ))
        }
    </>)
}