const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode' 
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})
function setTime(){
    const time = new Date();
    const hours = time.getHours();
    const hoursForClock = hours%12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const ampm = hours>= 12 ? 'PM' : 'AM'

    hourEl.style.transform =`translate(-50%,-100%) rotate(${(hoursForClock*360/12)+(minutes*360/(12*60))+(seconds*360/(12*3600))}deg)`
    minuteEl.style.transform =`translate(-50%,-100%) rotate(${(minutes*360/(60))+(seconds*360/(3600))}deg)`
    secondEl.style.transform =`translate(-50%,-100%) rotate(${(seconds*360/60)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes} ${ampm}`
    dateEl.innerHTML =`${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}
setTime()
setInterval(setTime,1000)