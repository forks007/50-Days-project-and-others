const magicBtn = document.getElementById('magic')
const boxes = document.getElementById('boxes')

magicBtn.addEventListener('click',()=>{
    boxes.classList.toggle('big')
    console.log('hello')
})
// boxes.addEventListener('mouseout',()=>{
//     boxes.classList.add('big')
// })
// boxes.addEventListener('mouseover',()=>{
//     boxes.classList.remove('big')
// })

function createBox(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            const box = document.createElement('div')
            box.classList.add('box')

            box.style.backgroundPosition = `${-j*125}px ${-i*125}px`

            boxes.appendChild(box)
        }
    }
}
createBox()