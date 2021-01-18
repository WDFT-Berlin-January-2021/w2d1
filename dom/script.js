

// console.log(document);

// access an element from the html
const todoList = document.getElementById('todo-list')

// console.log(todoList);

// get all the li tags - returns an html collection
// is not an array but can be treated as one
const allListItems = document.getElementsByTagName('li')
// this works
// console.log(allListItems[0]);
// this does not work - but you could turn it into an array
// like this: [...allListItems].forEach() 
// allListItems.forEach(function (li) {
//     console.log(li);
// })

const todoListItems = todoList.getElementsByTagName('li');
// console.log(todoListItems);

// console.log(todoListItems[2]);
// access what is in between the tags
// console.log(todoListItems[2].innerText);
// todoListItems[2].innerText = 'solve katas';

// turn all the content of the todo list items to uppercase
for (let i = 0; i < todoListItems.length; i++) {
    todoListItems[i].innerText = todoListItems[i].innerText.toUpperCase();
}

// returns also an html collection
const container = document.getElementsByClassName('todo-container');
// console.log(container[0]);

// querySelector accepts any css query as an argument
// querySelector (singular) always returns the first element
// that matches the query
const firstItem = document.querySelector('#todo-list li');
// console.log(firstItem);

// querySelectorAll - this returns all elements that match
// the query - as a node list - here you can use array methods
const allItems = document.querySelectorAll('#todo-list li');
// console.log(allItems[0]);
// // allItems.forEach(function (el) {
// //     console.log(el.innerText);
// // })

// change css of item
// const property = 'backgroundColor';
// firstItem.style.backgroundColor = 'red';
// firstItem.style[property] = 'green';

// firstItem.className = 'checked';
// add a class
firstItem.classList.add('checked')

// remove a class
firstItem.classList.remove('checked')

// toggle - toggles the class
firstItem.classList.toggle('checked');
firstItem.classList.toggle('checked');

firstItem.setAttribute('id', 'first-item');

// we can fix the broken image
document.querySelector('img').setAttribute(
    'src',
    'https://images.unsplash.com/photo-1610960245237-cfab0dea6be4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
)


console.log(todoList);

// we wanna add a new element into the dom - a heading

const heading = document.createElement('h1');
heading.innerText = 'My Todo List';
// if you want to add html -> use innerHTML
// heading.innerHTML = '<div>todo list</div>'
console.log(heading);
const parentElement = document.querySelector('.todo-container');
// const todoList = document.getElementById('todo-list')
parentElement.insertBefore(heading, todoList);

// remove the paragraph
const paragraph = document.getElementsByTagName('p')
console.log(paragraph[0]);
parentElement.removeChild(paragraph[0]);