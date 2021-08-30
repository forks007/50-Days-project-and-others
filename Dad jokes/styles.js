const jokesEl = document.getElementById('joke')
const jokesBtn = document.getElementById('jokeBtn')

jokesBtn.addEventListener('click',generateJoke)

generateJoke()


//USING async/await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com',config)

    const data = await res.json()

    jokesEl.innerHTML = data.joke

}
//USing .then

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com',config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokesEl.innerHTML = data.joke
//     })

// }
