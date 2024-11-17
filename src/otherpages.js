const sliderdata=[
    {url: '/assets/1.png'},
    {url: '/assets/2.png'},
    {url: '/assets/3.jpg'},
    {url: '/assets/4.jpg'},
    {url: '/assets/5.jpeg'},
    {url: '/assets/6.jpg'},
]
let i=0
let e=0
const img=document.querySelector('#slider img')
const left=document.querySelector('#slider .left-arrow')
const right=document.querySelector('#slider .right-arrow') 
const random=parseInt(Math.random()*sliderdata.length)
left.addEventListener('click',function(){
    i--
    if(i<0){
        i=5
    }
    img.src=sliderdata[i].url
})
right.addEventListener('click',function(){
    i++
    if(i>5){i=0}
    img.src=sliderdata[i].url
})
function playe(){
    i=parseInt(Math.random()*sliderdata.length)
    //console.log(i)
    if(i==e){
        i++
        if(i>5){
            i=0
        }
    }
    img.src=sliderdata[i].url
    e=i
}
// function getrandom(N,M){
//     return Math.floor(Math.random()*(N-M+1)+N)
// }

// //console.log(sliderdata[random])

let timeId=setInterval(playe,1500)
const slider=document.querySelector('#slider')
slider.addEventListener('mouseenter', function(){
    clearInterval(timeId)
})
slider.addEventListener('mouseleave', function(){
    clearInterval(timeId)
    timeId=setInterval(playe,1500)
})
