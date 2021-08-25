const play = document.querySelector('#play')
const div = document.querySelector('div')

const theNumber =Math.round (Math.random()*10)
console.log(theNumber)

play.addEventListener("click",()=>{
    let form = document.createElement('form')
    let input = document.createElement('input')
    input.type = 'number'
    input.className = 'guess'

    let submit = document.createElement('input')
    submit.type = "submit"
    submit.className = 'submit'
    div.appendChild(form)
    form.appendChild(input)
    form.appendChild(submit)
    play.remove()
    
    for (i=1;i<=5;i++){
        form.addEventListener('submit',(event)=>{
            event.preventDefault()
            if(input.value<theNumber){
                console.log('your guess is too low')
            }else if(input.value>theNumber){
                console.log('this is too much')
            }else{
                console.log('Congratulation!!! damn right')
            }
            
        })
    }
})