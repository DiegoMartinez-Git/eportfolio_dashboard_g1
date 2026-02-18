
const getFamiliasProfesionales = () => {
    return fetch("https://mocki.io/v1/e33dd916-9cb9-4967-9958-06e0c32d2f5d")
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export default getFamiliasProfesionales
