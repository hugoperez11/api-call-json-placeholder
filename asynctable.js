const uri = 'https://jsonplaceholder.typicode.com/users';

// Función principal que se llama al cargar la página
async function app() {
    const data = await retrieveData();
    renderDataInTable(data);
}
 
// Función para recuperar los datos de todos los usuarios
async function retrieveData() {
    const response = await fetch(uri);
    const data = await response.json();
    return data;
}

function renderDataInTable(data) {
    const tableBody = document.getElementById('todosTable').getElementsByTagName('tbody')[0];
    data.forEach(todo => {
        //inserta una nueva fila al final del <tbody> y devuelve una referencia a la nueva fila (elemento <tr>).
        const row = tableBody.insertRow();
        // inserta una nueva celda en la primera posición de la fila y devuelve una referencia a esta celda (elemento <td>).
        const cellId = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellCity = row.insertCell(2);
        //textContent es una propiedad de los elementos del DOM (Document Object Model) en JavaScript que representa el contenido textual de un nodo y de todos sus descendientes.
        cellId.textContent = todo.id;
        cellName.textContent = todo.username;
        cellCity.textContent = todo.address.city;
    });
};

// Función para recuperar los datos de un usuario por su ID
async function UserById(id) {
    const response = await fetch(`${uri}/${id}`);   
    const user = await response.json();
        render(user);   
}

// Función para mostrar la información del usuario en el DOM
function render(user) {
    const userInfoDiv = document.getElementById('userInfo');      
    userInfoDiv.innerHTML = `<p>Name: ${user.name}</p><p>Phone: ${user.phone}</p>`;   
}

// Event listener para el botón de búsqueda de usuario
document.getElementById('UserButton').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;    
        UserById(userId);    
});

// Llama a la función principal para iniciar el proceso
app();
