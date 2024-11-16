const sliderdata=[
    {url: '/assets/1.png'},
    {url: '/assets/2.png'},
    {url: '/assets/3.jpg'},
    {url: '/assets/4.jpg'},
    {url: '/assets/5.jpeg'},
    {url: '/assets/6.jpg'},
]
let i=0
const img=document.querySelector('#slider img')
const left=document.querySelector('#slider .left-arrow')
const right=document.querySelector('#slider .right-arrow')
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

// function getrandom(N,M){
//     return Math.floor(Math.random()*(N-M+1)+N)
// }
// const random=parseInt(Math.random()*sliderdata.length)
// //console.log(sliderdata[random])

// if (img) {
//     img.src = sliderdata[random].url;
// } else {
//     console.error("找不到 '.slider img' 元素，请检查 HTML 结构！");
// }