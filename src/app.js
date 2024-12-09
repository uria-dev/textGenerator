import './style.css'
const randomString = require(`./textGen`)
const btn = document.getElementById(`btn`)
btn.addEventListener(`click`, () => {
    document.getElementById(`text`).innerText = randomString()
})
