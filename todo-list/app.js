// you can add the onclick listener to the html
{/* <button onclick="addTodo()">Add this todo</button> */ }

// or you can register that event listener via js
// document.querySelector('button').onclick = function () {
//     console.log('click');
// }

// document.querySelector('#my-button')
//     .addEventListener('onclick', function () {
//         console.log('click');
//     })

document.querySelector('input').addEventListener(
    'keyup',
    function (event) {
        if (event.keyCode === 13 && document.querySelector('input').value !== '') {
            console.log('keyup');
            addTodo();
        }
    }
)

function addTodo() {
    const input = document.querySelector('input').value;
    console.log(input);
    const todo = document.createElement('li');
    console.log('todo: ', todo);
    todo.innerText = input;
    const list = document.querySelector('ul');
    todo.onclick = toggleTodo
    list.appendChild(todo);
    document.querySelector('input').value = '';
}


document.querySelectorAll('ul>li').forEach(function (todo) {
    todo.onclick = toggleTodo
})

function toggleTodo(event) {
    // event.target is the clicked element
    console.log('clicked element: ', event.target);
    // event.target.classList.toggle('checked');
    const ul = event.target.parentNode;
    console.log(ul);
    // <FromThisElement>.removeChild(<ThisChild>)
    ul.removeChild(event.target)
}