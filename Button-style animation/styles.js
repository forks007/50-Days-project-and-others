const buttons = document.querySelectorAll('button')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const x = e.x
        const y = e.y

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;
        

        const circleY = y - btnTop;
        const circleX= x- btnLeft;
        // console.log(circleX,circleY);

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = `${circleY}px`
        circle.style.left = `${circleX}px`

        button.appendChild(circle)

        setTimeout(()=>{
            circle.remove()
        },1000)
    
    })

  
})