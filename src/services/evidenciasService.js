const createEvidencia = (evidencia) => {
    return fetch("https://mocki.io/v1/96b10dec-cfd7-45f9-b584-ddcb897faa93")
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export { createEvidencia }
