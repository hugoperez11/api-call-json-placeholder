//constante path que contiene la ruta al archivo JSON (data.json)
const path = 'data.json';

async function app() {
    // Llama a la función retrieveData y espera a que complete su ejecución para asignar el resultado a la constante data.    await se usa porque retrieveData devuelve una promesa.
    const data = await retrieveData();
    renderDataInconsole(data);
}

async function retrieveData() {
    //Usa fetch para hacer una solicitud HTTP GET a la ruta definida en path.    await se usa porque fetch devuelve una promesa.
    const response = await fetch(path);
    //Convierte la respuesta de la solicitud en un objeto JSON.    await se usa porque .json() devuelve una promesa.
    const data = await response.json();
    return data;
}

function renderDataInconsole(data) {
    for (let index = 0; index < data.results.length; index++) {
        console.log(data.results[index].title);
    }
}


app();



