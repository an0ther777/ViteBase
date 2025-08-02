import './style.scss'
import Button from './components/UI/Button/Button'

document.querySelector("#app").innerHTML = `
  <section>
    ${Button()}
    ${Button()}
    ${Button()}
    <img src="/vite.svg ">
  </section>
`

