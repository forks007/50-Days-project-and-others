const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')



updateBigCup()

smallCups.forEach((cup,idx) =>{
    cup.addEventListener('click',()=>highlightCups(idx))
    
})
function highlightCups(idx){
    if(smallCups[idx].classList.contains('full')&& !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup,idx2)=>{
        if (idx2<=idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.full').length
    const totCups = smallCups.length
    

    if(fullCups===0){
        console.log(totCups)
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totCups*330}px`
        percentage.innerText = `${fullCups/totCups*100}%`
    }
    if(fullCups===totCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250*fullCups/1000)}L`
    }
}
