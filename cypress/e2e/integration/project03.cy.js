/// <reference types="cypress"/>

import FlightFormPage from "../../pages/FlightFormPage"

const flightFormPage = new FlightFormPage()

describe('Project 03', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/booking')
    })
    /*Test Case 01 - Validate the default Book your trip form
    Navigate to https://techglobal-training.com/frontend/booking
    Validate that the “One way” radio button is displayed enabled and selected by default
    Validate that the “Round trip” radio button is displayed enabled and not selected by default
    Validate that the “Cabin Class” label and dropdown are displayed
    Validate that the “From” label and dropdown are displayed
    Validate that the “To” label and dropdown are displayed
    Validate that the “Depart” label and date picker is displayed
    Validate that the “Return” label and date picker is displayed and disabled
    Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
    Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
    Validate that the “BOOK” button is displayed and enabled
     */

    it('Test Case 01 - Validate the default Book your trip form', () => {

        cy.get('.radio.ml-0').children('input')
            .should('be.checked')
        cy.get('.radio:not(.ml-0)').children('input')
            .should('not.be.checked')

        cy.contains('label', 'Return').should('be.visible')
        cy.get('input[placeholder="MM/DD/YY"]').eq(1).should('be.visible')
            .and('be.disabled')

        flightFormPage.validateCommonElements()


    })

    /*Test Case 02 - Validate the Book your trip form when Round trip is selected
    Navigate to https://techglobal-training.com/frontend/booking
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
     */
    it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {

        cy.get('.radio:not(.ml-0)').children('input')
            .click()
            .should('be.checked')

        cy.get('.radio.ml-0').children('input')
            .should('not.be.checked')

        cy.contains('label', 'Return').should('be.visible')
        cy.get('input[placeholder="MM/DD/YY"]').eq(1).should('be.visible')


        flightFormPage.validateCommonElements()



    })

    /* Test Case 03 - Validate the booking for 1 passenger and one way
    Navigate to https://techglobal-training.com/frontend/booking
 Select the “One way” radio button
 Select “Business” for the “Cabin Class” dropdown
 Select “Illinois” for the “From” dropdown
 Select “Florida” for the “To” dropdown
 Select the next week for the ”Depart”
 Select “1” for the “Number of passengers” dropdown
 Select “Senior (65+)” for the Passenger 1 dropdown
 Click on the “BOOK” button
 Validate the booking information displayed below
 DEPART
 IL to FL
 {dynamic date}
 Number of passengers: 1
 Passenger 1: Senior (65+)
 Cabin Class: Business
 */

    it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {

        cy.get('.radio.ml-0').children('input')
            .click()

        cy.get('.select select').eq(0).select('Business')
        cy.get('.select select').eq(0)
            .find('option:selected')
            .should('have.text', 'Business')

        cy.get('.select select').eq(1).select('Illinois')
        cy.get('.select select').eq(1)
            .find('option:selected')
            .should('have.text', 'Illinois')

        cy.get('.select select').eq(2).select('Florida')
        cy.get('.select select').eq(2)
            .find('option:selected')
            .should('have.text', 'Florida')


        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7)
        const nextWeekDay = nextWeek.getDate()
        const nextWeekFormatted = nextWeekDay.toString()
        

        cy.get('input[placeholder="MM/DD/YY"]').eq(0).click()
        cy.get('.react-datepicker__month-container')
            .contains(nextWeekDay)
            .click();


        cy.get('.select select').eq(3).select('1')
            .find('option:selected')
            .should('have.text', '1')

        cy.get('.select select').eq(4).select('Senior (65+)')
            .find('option:selected')
            .should('have.text', 'Senior (65+)')

        cy.contains('button', 'BOOK').click()


        /*const bookingSummary = [
             'DEPART',
            {nextWeekFormatted},
             'IL to FL',
             'Number of passengers: 1',
             'Passenger 1: Senior (65+)',
             'Cabin Class: Business'
 
         ]
 
         bookingSummary.forEach((text) => {
             cy.get('.ml-3').contains(text).should('be.visible')

             */
         })
 /*Test Case 04 - Validate the booking for 1 passenger and round trip
Navigate to https://techglobal-training.com/frontend/booking
Select the “Round trip” radio button
Select “First” for the “Cabin Class” dropdown
Select “California” for the “From” dropdown
Select “Illinois” for the “To” dropdown
Select the next week for the ”Depart”
Select the next month for the “Return”
Select “1” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
CA to IL
{dynamic date}
Number of passengers: 1
Passenger 1: Adult (16-64)
Cabin Class: First


RETURN
IL to CA
{dynamic date}
  */
  it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {

       cy.get('.radio:not(.ml-0)').children('input')
            .click()

        cy.get('.select select').eq(0).select('First')
        cy.get('.select select').eq(0)
            .find('option:selected')
            .should('have.text', 'First')

        cy.get('.select select').eq(1).select('California')
        cy.get('.select select').eq(1)
            .find('option:selected')
            .should('have.text', 'California')

        cy.get('.select select').eq(2).select('Illinois')
        cy.get('.select select').eq(2)
            .find('option:selected')
            .should('have.text', 'Illinois')


        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7)
        const nextWeekDay = nextWeek.getDate()
        const nextWeekFormatted = nextWeekDay.toString()
        

        cy.get('input[placeholder="MM/DD/YY"]').eq(0).click()
        cy.get('.react-datepicker__month-container')
            .contains(nextWeekDay)
            .click();


        cy.get('.select select').eq(3).select('1')
            .find('option:selected')
            .should('have.text', '1')

        cy.get('.select select').eq(4).select('Adult (16-64)')
            .find('option:selected')
            .should('have.text', 'Adult (16-64)')

        cy.contains('button', 'BOOK').click()
  })
   

/*Test Case 05 - Validate the booking for 2 passengers and one way
Navigate to https://techglobal-training.com/frontend/booking
Select the “One way” radio button
Select “Premium Economy” for the “Cabin Class” dropdown
Select “New York” for the “From” dropdown
Select “Texas” for the “To” dropdown
Select the next day for the ”Depart”
Select “2” for the “Number of passengers” dropdown
Select “Adult (16-64)” for the Passenger 1 dropdown
Select “Child (2-11)” for the Passenger 2 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
NY to TX
{dynamic date}
Number of passengers: 2
Passenger 1: Adult (16-64)
Passenger 2: Child (2-11)
Cabin Class: Premium Economy
 */
it('TTest Case 05 - Validate the booking for 2 passengers and one way', () => {

        cy.get('.radio.ml-0').children('input')
            .click()

        cy.get('.select select').eq(0).select('Premium Economy')
        cy.get('.select select').eq(0)
            .find('option:selected')
            .should('have.text', 'Premium Economy')

        cy.get('.select select').eq(1).select('New York')
        cy.get('.select select').eq(1)
            .find('option:selected')
            .should('have.text', 'New York')

        cy.get('.select select').eq(2).select('Texas')
        cy.get('.select select').eq(2)
            .find('option:selected')
            .should('have.text', 'Texas')

            const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 1)
        const nextWeekDay = nextWeek.getDate()
        const nextWeekFormatted = nextWeekDay.toString()
        

        cy.get('input[placeholder="MM/DD/YY"]').eq(0).click()
        cy.get('.react-datepicker__month-container')
            .contains(nextWeekDay)
            .click();


        cy.get('.select select').eq(3).select('2')
            .find('option:selected')
            .should('have.text', '2')

        cy.get('.select select').eq(4).select('Senior (65+)')
            .find('option:selected')
            .should('have.text', 'Senior (65+)')

        cy.get('.select select').eq(5).select('Child (2-11)')
            .find('option:selected')
            .should('have.text', 'Child (2-11)')

        cy.contains('button', 'BOOK').click()

})

})