# DOM Manipulation

### Goals:

- Explain what the DOM is and why we use JavaScript to manipulate the DOM
- Manipulate the DOM by using: - .querySelector() - .querySelectorAll() - .createElement() - .getElementById() - .getElementsByClassName() - .appendChild() - .remove() - .innerHTML - .innerText, and .textContent
  to create, read, update, and delete elements from the DOM
- Create and append new elements to the DOM

How do we start manipulating things?
how do we access elements, select elements

document.getElementById(), it accepts the id as an argument
returns the first match

const pokeForm = document.getElementById('poke-form')
console.log(pokeForm)