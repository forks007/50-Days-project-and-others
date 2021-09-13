const button = document.getElementById('button')
const toasts = document.getElementById('toasts')
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]
const types = [
    'error',
    'success',
    'info',
]

button.addEventListener('click',()=>createNotification())

function createNotification(message = null, type = null){
    const randomIndex = Math.round(Math.random()*3)
    const randomIndex2 = Math.round(Math.random()*2)

    const toast = document.createElement('div')
    toast.className='toast'
    toast.classList.add(type ? type:types[randomIndex2])
    toast.innerText = message ? message : messages[randomIndex]
    toasts.appendChild(toast)

    setTimeout(()=>{
        toast.remove()
    },3000)
}
