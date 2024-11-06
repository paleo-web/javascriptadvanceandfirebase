"use strict";
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
function addTodo() {
    const todo = input.value;
    if (todo) {
        result.innerHTML += `<li>${todo} <button onclick="editTodo(this)" id="edit">edit</button> <button onclick="deleteTodo(this)" id="delete">delete</button> </li>`;
        input.value = "";
    }
}
addTodo();
btn.addEventListener("click", addTodo);
function editTodo(element) {
    var _a;
    const todo = prompt("edit todo");
    if (todo) {
        (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        result.innerHTML += `<li>${todo} <button onclick="editTodo(this)" id="edit">edit</button> <button onclick="deleteTodo(this)" id="delete">delete</button> </li>`;
    }
}
function deleteTodo(element) {
    var _a;
    (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
let hello = function (num1, num2) {
    return num1 + num2;
};
const result1 = hello(10, 20);
console.log(result1);
const student = {
    name: "John",
    rollNo: 123,
    bathch: "11",
    marks: 80
};
console.log(student);
