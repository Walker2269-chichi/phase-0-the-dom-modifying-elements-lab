// Select and remove the main element with id 'main'
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}
const newHeader = document.createElement('h1');
// Set the id

newHeader.id = 'victory';
// Set the text content of the <h1> element
newHeader.textContent = 'Jeremiah is the champion';


// Append the newHeader to the document body
document.body.appendChild(newHeader);
