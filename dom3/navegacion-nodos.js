const parent = document.getElementById('parent');
console.log(parent); // seleccionamos el elemento con id "parent"

const children = parent.children
console.log(children); // Traer a todos los hijos

const firstChild = parent.firstElementChild;
console.log(firstChild); // para traer al primer hijo.

const lastChild = parent.lastElementChild; 
console.log(lastChild); // para traer el último hijo. 

const previousSibling = parent.previousElementSibling;
console.log(previousSibling); // Para traer el elemento hermano(previo) del elemento seleccionado


const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

// parte 2 

const children2 = document.querySelector('li');
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2); // lista del nodo padre con todos sus hijos

const grandParent = children2.parentElement;
console.log(grandParent); // trae el elemento padre de un elemento hijo

const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log(grandGrandParent); // Traer un elemento cercano que sea igual o parecido al que seleccionamos (en este caso menu)