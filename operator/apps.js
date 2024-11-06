// console.log('hello ')

// let a = 'sarfaraz'
// let b = a.slice(0, 4)
// let c = b
// console.log(b)

// var arr1 = ['sar', 'david' , 'chem']

// arr1.forEach(
//     (data)=>{
//         console.log(data)
//     }
// )

// let user = prompt('enter your age ')

// let obj = [
//     {name: 'sarfraz' , father: 'fida' , class: '12th' , age: 19 ,occupation: 'programmer' },
//     {name: 'khalid' , father: 'faqir' , class: '12th' , age: 20 ,occupation: 'medical' },
//     {name: 'munaf' , father: 'AD' , class: '14th' ,     age: 27 ,occupation: 'programmer'},
//     {name: 'hafeez' , father: 'lal' , class: '12th' ,   age: 18 ,occupation: 'medical'},
//     {name: 'shahzad' , father: 'zaheer' ,class: '12th', age: 17, occupation: 'balochi-lectury'},
// ]

// let a = obj.filter((data)=>{
//     let c = data.age >= user && data.occupation === 'programmer'
    
//     return c
//     // return data.occupation === 'programmer' ? 'good' : 'not bad'

// })
// console.log(a)


// let car = {
//     Carname: 'v8',
//     model: 2008,
//     verify: true,
//     condition: 'Aone',
//     price: '10K'
// }

// let {Carname, model = 9999, ...rest} = car

// let arr1 = [rest , ...Carname]

// console.log(arr1);
// console.log(rest);

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]
// let arr4 = []

// arr1.forEach((ele)=>{
//     let a = ele + 2
//     arr4.push(a)
// })

// console.log(arr4)


// let myinfo = {
//     name: 'sarfaraz',
//     fatherName: 'fida',
//     ismarried: false,
//     Cnic: '52203-22445598',
//     phone: '03211828975',
//     cmid: 4321
// }
// myinfo.cmid = 6677
// myinfo.fun = ()=>{
// return 'hello'
// }
// let {cmid , fun} = myinfo
// console.log(fun());

// let students = [
//     {name: 'sarfraz', age:19, class: '12th',  Grade: 'B', TotalMarks: 780},
//     {name: 'khalid', age:20, class: '12th',  Grade: 'A', TotalMarks: 800},
//     {name: 'Hafeez', age:21, class: '12th',  Grade: 'B', TotalMarks: 670},
//     {name: 'Tamim', age:21, class: '12th',  Grade: 'B', TotalMarks: 590},
//     {name: 'Mahaz', age:19, class: '12th',  Grade: 'A+', TotalMarks: 980},
//     {name: 'raziq', age:19, class: '12th',  Grade: 'B', TotalMarks: 654},
//     {name: 'musaib', age:19, class: '12th',  Grade: 'D', TotalMarks: 488},
//     {name: 'ismial', age:19, class: '12th',  Grade: 'C', TotalMarks: 502},
// ]

// students.forEach((element)=>{
//     console.log(element)
// })

// let filter = students.filter((data)=>{
//     return data.TotalMarks >= 700 && data.Grade === 'A' || data.Grade === 'A+'
// })

// console.log(filter)

// console.log(i18nIsoCountries.getAlpha2Codes());

// console.log(i18nIsoCountries);

// i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json")); // Register locale
// console.log(i18nIsoCountries.getName("US", "en")); // "United States"

// const countries = require('country-list')();
// console.log(countries.getName('US')); // "United States"
// console.log(countries.getCode('United States')); // "US"
// const ct = require('countries-and-timezones');
// console.log(ct.getCountry('US')); // { id: 'US', name: 'United States', ... }
// const lookup = require('country-code-lookup');
// console.log(lookup.byIso('US')); // { country: 'United States', ... }
// console.log(lookup.byCountry('United States')); // { iso2: 'US', ... }



//phone number libraray with country code and flage!

// const input = document.querySelector("#phone");  
// document.addEventListener("DOMContentLoaded", function() {
//     const input = document.querySelector("#phone");
// const iti =    window.intlTelInput(input,  { 
//         // Options
        
//         initialCountry: "auto",
        
        
//         geoIpLookup: function(success, failure) {
            
        
//             fetch("https://ipinfo.io?token=<YOUR_TOKEN>")
//                 .then(response => response.json())
//                 .then(data => success(data.country))
//                 .catch(() => success("us"));
//         },
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
//     });


//     //getting user number value 
//     document.getElementById('submit').addEventListener('click', function(){
//         // let getnumber = iti.getnumber()
//         const nationalNumber = iti.getNumber(intlTelInputUtils.NATIONAL); // Phone number without country code
    
//         console.log(nationalNumber)
//     })
// });
// let user = prompt('movie name')
// let users = [
//     {tittle: 'horor', movieName: user},
//     {tittle: 'game of throne', movieName: user},
//     {tittle: 'Money heist', movieName: user},
//     {tittle: 'A', movieName: user},
// ]

// const filter = users.filter((data)=>{
//    return data.tittle === data.movieName
// })

// console.log(filter)


const url = 'https://moviedatabase8.p.rapidapi.com/Filter?MinRating=6.1&MaxRating=6.9&MinYear=2020&MaxYear=2023&MinRevenue=1000000&MaxRevenue=100000000&Genre=Action&MinRuntime=110&MaxRuntime=180&OriginalLanguage=en&SpokenLanguage=English&Limit=30';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fd81a7c514msh5ba1f9d55e521a4p15c7d3jsn5256de7f5df5',
		'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}