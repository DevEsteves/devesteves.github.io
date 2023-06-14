import About from "../../components/about"
import { mount } from "cypress/react18"

describe('App', () => {
    it('should mount app', () => {
        cy.mount(<About />)
    })
})
