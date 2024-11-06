// let myinfo = {
//     name: 'sarfaraz', 
//     ismarrid: false,
//     cnic: '52203-77666988',
    
// }

// // let {name ,...rest} = myinfo
// // console.log(rest)

// let num1 = [1,2,3,4]
// let num2 = [5,6,7]
// let combine = [...num1, ...num2, myinfo]

// // console.log(combine)

// function sum(arr1 = 2  , arr2 = 2){


//     return arr1 + arr2
// }

// let value = sum()
// console.log(value)

// let list = document.getElementById('list')

// let car =[
//  {model: 2024, status: 'sold'},
//  {model: 2020, status: 'pending'},
//  {model: 2024, status: 'soldOut'}
// ]

// car.forEach((data)=>{
// //  console.log(data)
// let ele = `
//  <div id="list_items" style="width: 200px; height: 200px; border: 2px solid red; background-color:${data.status === "sold" ? "red" :data.status === 'pending' ? 'yellow' : 'green'};">
//     <h2>${data.status === "sold" ? "sold" :data.status === 'pending' ? 'pending' : 'Soldout'}</h2>
//         </div>
// `

// list.innerHTML += ele
// })


let UserInfo = {
    name: 'john', 
    age: 30,
    fathername: 'Divid',
    ismarrid: false,
    cnic: '52203-77666988',
    phone: '8212345678',
    address: 'khi',
    country: 'pakistan',  
    city: 'lahore',
    state: 'punjab',
    postalcode: '1234',
       
}

let {cnic , fathername , ismarrid,...rest} = UserInfo

// console.log(...cnic ,  ...fathername)

let arr1 =[1,2,3,4,5]
let arr2 =[6,7,8,9,10]
let arr3 = [...arr1,...arr2 ,rest]

// console.log(arr3)


let car = {
    name: 'corolla',
    plateNo: 2266,
    model: 2024,
    status: 'pending',
    color: 'red',
    condestion: 'good',
    price: '40 lakh',
    sellStart: Hello
}

function Hello(){
    let date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth()
    let a ='RealTime Date' + " " + [day,month,year].toLocaleString()
    return a
}

let b = Hello()

console.log(b)