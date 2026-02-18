
const getModulosImpartidos = () => {
    return fetch("https://mocki.io/v1/f9f36236-d2cb-4229-adfd-76262093f676")
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

const getModulosMatriculados = () => {
    return fetch("https://mocki.io/v1/a1df95b7-b4bb-42f5-801b-b85661551376")
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export { getModulosImpartidos, getModulosMatriculados }
