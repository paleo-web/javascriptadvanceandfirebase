const input = document.getElementById("input") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

function addTodo() {
    const todo = input.value;
    if (todo) {
        result.innerHTML += `<li>${todo} <button onclick="editTodo(this)" id="edit">edit</button> <button onclick="deleteTodo(this)" id="delete">delete</button> </li>`;

        input.value = "";
    }
}

addTodo();
btn.addEventListener("click", addTodo);

function editTodo(element: HTMLButtonElement) {
    const todo = prompt("edit todo");
    if (todo) {
        element.parentElement?.remove();
        result.innerHTML += `<li>${todo} <button onclick="editTodo(this)" id="edit">edit</button> <button onclick="deleteTodo(this)" id="delete">delete</button> </li>`;
    }
}


function deleteTodo(element: HTMLButtonElement) {
    element.parentElement?.remove();
}



let hello = function(num1: number, num2: number) : number {

    return num1 + num2;
}

const result1 = hello(10, 20);

console.log(result1);

interface Info <type>{

    name: string,
    rollNo: number,
    bathch: string,
    marks: type
}

const student: Info<number> = {
    name: "John",
    rollNo: 123,
    bathch: "11",
    marks: 80
}

console.log(student)






