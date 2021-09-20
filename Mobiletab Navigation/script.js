const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideItem()
        hideContent()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideItem(){
    listItems.forEach((item)=> item.classList.remove('active'))
}
function hideContent(){
    contents.forEach((item)=> item.classList.remove('show'))
}