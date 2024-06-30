
const uri= 'https://jsonplaceholder.typicode.com/users';

// Función asíncrona para obtener y mostrar los datos de los usuarios
async function getData() {
  try {
    // Realiza la solicitud a la API
    const response = await fetch(uri);  
    
    // Convierte la respuesta a JSON
    const users = await response.json();   
    console.log(users);
  

  } catch (error) {    
    console.error('Error in your fetch operation:', error);
  }
}
getData();
