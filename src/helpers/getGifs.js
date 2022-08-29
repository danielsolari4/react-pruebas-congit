export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9sPSdlSB38fzup4k93sn4CwZv8mU6bVQ&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    }
    );
    console.log(gifs)
    return gifs;
}