const ap = document.getElementById('pro1');
const ap2 = document.getElementById('pro2');
const ap3 = document.getElementById('pro3');
const ap4 = document.getElementById('pro4');



let earpod1 = "images/airpods.webp";
let earpod2 = "images/airpod2.jpg";
let watch1 = "images/apple-watch.webp";
let watch2 = "images/White-Apple-Watch.png";

ap.addEventListener('click', function (){
    
    document.getElementById('image').setAttribute('src', earpod1);

})

ap2.addEventListener('click', function (){
    
    document.getElementById('image').setAttribute('src', earpod2); 

})
ap3.addEventListener('click', function (){
   
    document.getElementById('image1').setAttribute('src', watch1);

})

ap4.addEventListener('click', function (){
    console.log('hi')
    document.getElementById('image1').setAttribute('src', "images/White-Apple-Watch.png");

})