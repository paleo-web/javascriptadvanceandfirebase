// var ul = document.getElementById('ul')

// var students = ['Noman' , 'munaf', 'bilal', 'usman', ]

// function sub(){
        
// students.forEach(function(values, index){
//     var lis = `
    
//     <li>
//     <span id="${index}">${values}</span>
//     <button onclick="edit(this)">Edit</button>
//     <button onclick="del(this)">del</button>
//     </li>
//     `
        
//     ul.innerHTML += lis
        
//     })

    
// }

// function edit(ele){
    
//     ele.parentElement.id.name = prompt('update the message')

// }




// var obj = {
//     name: 'sarfaraz',
//     fatherName: 'fida hussain'
// }

// obj.prototype.calu = function(){
    
// }


// const products = fetch('https://api.escuelajs.co/api/v1/products')
// // const A = products.json()

// async function getProducts(){
//     const response = await products
//     const product = await response.json()
//     // console.log(product )

//     product.forEach(element => {
//         console.log(element)
//     });

// }




// getProducts()


let A = async ()=>{
    let container = document.getElementById('container')
   try {
    let responese = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await responese.json()

    data.forEach(element => {
        console.log(element)
        let card = `
        <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">${element.name}</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">${element.username}</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4"> <span class="leading-relaxed text-red-500 text-lg mb-4 font-bold">City name:</span> ${element.address.city}</p>
                <p class="leading-relaxed text-lg mb-4"><span class="leading-relaxed text-orange-500 text-lg mb-4 font-bold">Street name:</span>  ${element.address.street}</p>
                <p class="leading-relaxed text-lg mb-4"> Zip code: ${element.address.zipcode}</p>
                <p class="leading-relaxed text-lg mb-4">Phone number: ${element.phone}</p>
                <p class="leading-relaxed text-lg mb-4">Website: ${element.website}</p>
                <a class="text-indigo-500 inline-flex items-center">${element.email}
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        `

        container.innerHTML += card
    });

   } catch (error) {
    console.log('not found', error)
   }
}

   A()


