describe('Project 01', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/form-elements')
    })

    it('Test Case01 - Validate the login form', () => {
        cy.get('.is-size-3').as('header').should('have.text', 'Contact Us')

        const expectedTexts = ['2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150']

        cy.get('@header').nextAll().each((ele, index) => {
            cy.wrap(ele).should('have.text', expectedTexts[index])
        })
    })

    it('Test Case 02- validate the full name input box', () => {
        cy.get('[for="name"]').parent().find('input').should('be.visible')
            .and('have.attr', 'placeholder', 'Enter your full name')
            .and('have.attr', 'required')


        cy.get('[for="name"]').should('have.text', 'Full name *')
    })

    it('TestCase 09 -  Validate the SUBMIT button',() => {

        cy.get('.control >.button').should('be.visible')
        .and('be.enabled')
        .and('have.text', 'SUBMIT')
    })
})