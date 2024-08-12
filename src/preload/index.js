// preload/index.js

// Si no necesitas exponer APIs específicas o hacer algún trabajo
// en el contexto de preload, este archivo puede permanecer simple.

console.log('Preload script is running')

// Ejemplo de cómo exponer una API personalizada en el objeto `window`.
// Puedes agregar más métodos a esta API según lo necesites.
window.myCustomAPI = {
  example: () => console.log('This is an example API')
}

// Nota: Con `nodeIntegration: true`, puedes usar directamente
// las APIs de Node.js en el renderer, así que no necesitas hacer
// mucho más en este archivo, a menos que quieras estructurar
// tu aplicación de una manera específica.
