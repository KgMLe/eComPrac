// let divProducts = document.getElementById('products');
// products.forEach((data)=> {
//     divProducts.innerHTML += `
//     <div class="card">
    
//         <h4 class="display-4">${data.src}</h4>
//         <div class="card-body">
//             <p class="text-white">
//                 ${data.brand} @ <span>${data.price}</span>
//             </p>
//         </div>
//     </div>
//     `

// })    

let products = [
    {
                id: 1,
                src: 'https://i.postimg.cc/NMN0gR6d/gucci.webp',
                brand:'Gucci',
                price: 'R20 000'
            },
            {
                id: 2,
                src: 'https://i.postimg.cc/SNYKh2JG/guess.jpg', 
                brand: 'Guess',
                price: 'R2 000'
            },
            {
                id: 3,
                src: 'https://i.postimg.cc/4yqNcZFt/rayban.webp',  
                brand: 'Ray-Bans',
                price: 'R 300'
            },
            {   id: 4,
                src: 'https://i.postimg.cc/prpLyykR/police.jpg', 
                brand: 'Police',
                price: 'R7 000',
            },
            {
                id: 5,
                src: 'https://i.postimg.cc/Y929KdW4/polar.jpg', 
                brand: 'Polar',
                price: 'R2 000',
            },
            {
                id: 6,
                src: 'https://i.postimg.cc/DfMzHdyZ/galxb.webp', 
                brand: 'GalXBoy',
                price: 'R800',
            },
            ];

            let divProducts = document.querySelector('.products');
products.forEach((data)=> {
    divProducts.innerHTML += `
    <div class="card" style = "width: 18rem">
        <h4 class="display-6">${data.brand}</h4>
        <img class="card-img-top" src="${data.src}" alt="img">
        <div class="card-body container-fluid">
            <p class="text-black">
             <span>${data.price}</span>
            </p>
        </div>
    </div>
    `
})
      