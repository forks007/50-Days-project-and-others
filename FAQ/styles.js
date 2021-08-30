const toggleBtn = document.querySelectorAll('.faq-toggle')

toggleBtn.forEach(toggle=>{
    toggle.addEventListener('click',()=>{
        const faq = toggle.parentNode
        console.log(faq)
        faq.classList.toggle('active')
    })
})