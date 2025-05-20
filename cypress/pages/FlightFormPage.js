 class FlightFormPage {
    validateCommonElements() {

        cy.contains('label', 'Cabin Class').should('be.visible')
        cy.get('.select select').eq(0).should('be.visible')

        cy.contains('label', 'From').should('be.visible')
        cy.get('.select select').eq(1).should('be.visible')

        cy.contains('label', 'To').should('be.visible')
        cy.get('.select select').eq(2).should('be.visible')

        cy.contains('label', 'Depart').should('be.visible')
        cy.get('input[placeholder="MM/DD/YY"]').eq(0).should('be.visible')


        cy.contains('label', 'Number of passengers').should('be.visible')
        cy.get('.select select').eq(3).should('be.visible')
            .find('option:selected')
            .should('have.text', '1')

        cy.contains('label', 'Passenger 1').should('be.visible')
        cy.get('.select select').eq(4).should('be.visible')
            .find('option:selected')
            .should('have.text', 'Adult (16-64)')

        cy.contains('button', 'BOOK').should('be.visible')
            .and('be.enabled')

    }
}
export default FlightFormPage