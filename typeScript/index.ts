let hello: string = 'hello';
let age: number = 18;
let isMale: boolean = true;
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: Array<string> = ['1', '2', '3'];
let list4: string[] = ['1', '2', '3'];
let list5: Array<string | number> = ['1', '2', '3', 4, 5];
let fun : () => void = function() {
    console.log('hello');
}
fun()

interface Person {
    name: string;
    age: number;
    phone: number;
    address: string;
    url: string;
}

const person: Person = {
    name: 'abdullah',
    age: 18,
    phone: 1234567890,
    address: '123 Main St',
    url: 'https://example.com',
}
console.log(person)

interface Car{
    model: number,
    carColor: string,
    condition: string,
    price: number,
    Carname: string
}

const car: Car = {
    model: 2022,
    carColor: 'red',
    condition: 'good',
    price: 1000,
    Carname: 'BMW'
}
console.log(car)

interface User  <type > {
    data: type
}


  