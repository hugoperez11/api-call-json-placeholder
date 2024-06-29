const path = 'data.json';

async function app() {
    const data = await retrieveData();
    renderDataInTable(data);
}

async function retrieveData() {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}

function renderDataInTable(data) {
    const tableBody = document.getElementById('todosTable').getElementsByTagName('tbody')[0];
    data.results.forEach(todo => {
        //inserta una nueva fila al final del <tbody> y devuelve una referencia a la nueva fila (elemento <tr>).
        const row = tableBody.insertRow();
        // inserta una nueva celda en la primera posición de la fila y devuelve una referencia a esta celda (elemento <td>).
        const cellTitle = row.insertCell(0);
        const cellPriority = row.insertCell(1);
        const cellIsDone = row.insertCell(2);
        //textContent es una propiedad de los elementos del DOM (Document Object Model) en JavaScript que representa el contenido textual de un nodo y de todos sus descendientes.
        cellTitle.textContent = todo.title;
        cellPriority.textContent = todo.priority;
        cellIsDone.textContent = todo.isDone ? 'Yes' : 'No';
    });
}

app();