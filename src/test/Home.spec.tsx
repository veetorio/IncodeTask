import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"
describe('testes da home',() => {
    it("renderizou o app",() => {
        render(<App/>)
        screen.debug()
    }) 
})

