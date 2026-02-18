
const getRoles = () => {
    return fetch("https://mocki.io/v1/ea250d18-6da7-4a64-b0a6-263b6e993c7a")
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export default getRoles
