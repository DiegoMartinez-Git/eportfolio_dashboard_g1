const getTareas = () => {
    return fetch("https://mocki.io/v1/13b32b21-57ad-42cf-9eba-44db7a5a805b")
        .then((response) => response.json())
        .catch((error) => console.log(error));
}



export { getTareas }
