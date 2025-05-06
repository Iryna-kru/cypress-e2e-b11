/// <reference types="cypress"/>

/*Test Case 01 - Validate the Contact Us information
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the heading is “Contact Us”
Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
Validate the email is “info@techglobalschool.com"
Validate the phone number is “(224) 580-2150”

 */
beforeEach(() => {
    cy.visit('https://techglobal-training.com/frontend/form-elements')
})
describe('Test Case 01 Validate the Contact Us information', () => {

    it(' Validate Contact Us heading', () => {
        cy.get('.is-size-3')
            .should('be.visible')
            .and('have.text', 'Contact Us')
    })

    it('Validate address', () => {
        cy.get('#address')
            .should('be.visible')
            .and('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
    })

    it('Validate email', () => {
        cy.get('#email')
            .should('be.visible')
            .and('have.text', 'info@techglobalschool.com')
    })
    it('Validate phone number', () => {
        cy.get('#phone-number')
            .should('be.visible')
            .and('have.text', '(224) 580-2150')
    })
})

/*Test Case 02 - Validate the Full name input box
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Full name input box is displayed
Validate that the Full name input box is required
Validate that the label of the Full name input box is “Full name *”
Validate that the placeholder of the Full name input box is “Enter your full name

 */

describe('Test Case 02 Validate the Full name input box', () => {

    it('Validate that the Full name input box is displayed', () => {
        cy.get('input.input[placeholder="Enter your full name"]')
            .should('be.visible')
    })
    it('Validate that the Full name input box is displayed', () => {
        cy.get('input.input[placeholder="Enter your full name"]')
            .should('have.attr', 'required')
    })
    it('Validate that the label of the Full name input box is “Full name *”', () => {
        cy.get('label[for="name"]')
            .should('have.text', 'Full name *')
    })
    it('Validate that the placeholder of the Full name input box is “Enter your full name', () => {
        cy.get('input.input')
            .should('have.attr', 'placeholder', 'Enter your full name')
    })

})

/*
Test Case 03 - Validate the Gender radio button
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the label is “Gender *”
Validate that the Gender is required
Validate the options are “Female”, “Male” and “Prefer not to disclose”
Validate the options are clickable and not selected
Click on the “Male” option and validate it is selected while the others are not selected
Click on the “Female” option and validate it is selected while the others are not selected

 */

describe('Test case 3 Validate the Gender radio button', () => {

    it('Validate the label is “Gender *”', () => {
        cy.get('label.label').contains('Gender *')
            .should('be.visible')
    })

    it('Validate the options are clickable and not selected', () => {
        cy.contains('label', 'Male').should('be.visible')
        cy.contains('label', 'Female').should('be.visible')
        cy.contains('label', 'Prefer not to disclose').should('be.visible')

    })

    it('Validate that the Gender is required', () => {
        cy.get('input[type="radio"][name="question"][required]')
            .should('exist')
    })

    it('Validate the options are clickable and not selected', () => {
        cy.get('input[type="radio"][name="question"]')
            .should('have.length', 3)
            .each(($el) => {
                cy.wrap($el).should('be.visible')
                cy.wrap($el).should('not.be.disabled')
                cy.wrap($el).should('not.be.checked')
            })
    })

    it('Click on the “Male” option and validate it is selected while the others are not selected', () => {
        cy.contains('label', 'Male')
            .find('input').check().should('be.checked')
        cy.contains('label', 'Female')
            .find('input').should('not.be.checked')
        cy.contains('label', 'Prefer not to disclose')
            .find('input').should('not.be.checked')
    })

    it('Click on the “Female” option and validate it is selected while the others are not selected', () => {

        cy.contains('label', 'Female')
            .find('input').check().should('be.checked');
        cy.contains('label', 'Male')
            .find('input').should('not.be.checked');
        cy.contains('label', 'Prefer not to disclose')
            .find('input').should('not.be.checked');
    });
})
/*Test Case 04 - Validate the Address input box
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Address input box is displayed
Validate that the Address input box is not required
Validate that the label of the Address input box is “Address”
Validate that the placeholder of the Address input box is “Enter your address*
*/

describe('Test Case 04 - Validate the Address input box', () => {

    it('Validate that the Address input box is displayed', () => {
        cy.get('input.input[placeholder="Enter your address"]')
            .should('be.visible')
    })
    it('Validate that the Address input box is not required', () => {
        cy.get('input.input[placeholder="Enter your address"]')
            .should('not.have.attr', 'required')
    })
    it('Validate that the label of the Address input box is “Address”', () => {
        cy.contains('label', 'Address')
            .should('be.visible')

    })
    it('Validate that the placeholder of the Address input box is “Enter your address*', () => {
        cy.get('input[placeholder="Enter your address"]')
            .should('have.attr', 'placeholder', 'Enter your address*')
    })

})

/*Test Case 05 - Validate the Email input box
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Email input box is displayed
Validate that the Email input box is required
Validate that the label of the Email input box is “Email *”
Validate that the placeholder of the Email input box is “Enter your email”
 */

describe('Test Case 05 - Validate the Email input box', () => {

    it('Validate that the Email input box is displayed', () => {
        cy.get('input.input[placeholder="Enter your email"]')
            .should('be.visible')
    })
    it('Validate that the Email input box is required', () => {
        cy.get('input.input[placeholder="Enter your email"]')
            .should('have.attr', 'required')
    })
    it('Validate that the label of the Email input box is “Email *”', () => {
        cy.contains('label', 'Email *')
            .should('be.visible')

    })
    it('Validate that the placeholder of the Email input box is “Enter your email”', () => {
        cy.get('input[placeholder="Enter your email"]')
            .should('have.attr', 'placeholder', 'Enter your email')
    })

})
/*Test Case 06 - Validate the Phone input box
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Phone input box is displayed
Validate that the Phone input box is not required
Validate that the label of the Phone input box is “Phone”
Validate that the placeholder of the Address input box is “Enter your phone number”
 */

describe('Test Case 06 - Validate the Phone input box', () => {

    it('Validate that the Phone input box is displayed', () => {
        cy.get('input.input[placeholder="Enter your phone number"]')
            .should('be.visible')
    })
    it('Validate that the Phone input box is not required', () => {
        cy.get('input.input[placeholder="Enter your phone number"]')
            .should('not.have.attr', 'required')
    })
    it('Validate that the label of the Phone input box is “Phone”', () => {
        cy.contains('label', 'Phone')
            .should('be.visible')

    })
    it('Validate that the placeholder of the Address input box is “Enter your phone number”', () => {
        cy.get('input[placeholder="Enter your phone number"]')
            .should('have.attr', 'placeholder', 'Enter your phone number')
    })

})

/*Test Case 07 - Validate the Message text area
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Message text area is displayed
Validate that the Message text area is not required
Validate that the label of the Message text area is “Message”
Validate that the placeholder of the Message text area is “Type your message here…”
 */

describe('Test Case 07 - Validate the Message text area', () => {

    it('Validate that the Message text area is displayed', () => {
        cy.get('textarea[placeholder="Type your message here..."]')
            .should('be.visible')
    })
    it('Validate that the Message text area is not required', () => {
        cy.get('textarea[placeholder="Type your message here..."]')
            .should('not.have.attr', 'required')
    })
    it('Validate that the label of the Message text area is “Message”', () => {
        cy.contains('label', 'Message')
            .should('be.visible')

    })
    it('Validate that the placeholder of the Message text area is “Type your message here…”', () => {
        cy.get('textarea[placeholder="Type your message here..."]')
            .should('have.attr', 'placeholder', 'Type your message here...')
    })

})
/*Test Case 08 - Validate the Consent checkbox
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the label is “I give my consent to be contacted.”
Validate that the Consent checkbox is required
Validate that the Consent checkbox is clickable
Click on the “I give my consent to be contacted.” checkbox and validate it is selected
Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
 */

describe('Test Case 08 - Validate the Consent checkbox', () => {

    it('Validate the label is “I give my consent to be contacted.”', () => {
        cy.contains('label.checkbox', 'I give my consent to be contacted.')
            .should('be.visible')

    })
    it('Validate that the Consent checkbox is required', () => {
        cy.get('label.checkbox input[type="checkbox"]')
            .should('have.attr', 'required')
    })
    it('Validate that the Consent checkbox is clickable', () => {
        cy.get('label.checkbox input[type="checkbox"]')
            .should('not.be.disabled')
            .click()
            .should('be.checked')

    })
    it('Click on the “I give my consent to be contacted.” checkbox and validate it is selected', () => {
        cy.get('label.checkbox input[type="checkbox"]')
            .click()
            .should('be.checked')
    })
    it('Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected', () => {
        cy.get('label.checkbox input[type="checkbox"]')
            .click()
            .should('be.checked')
            .click()
            .should('not.be.checked')
    })

    /* it.only('Clicks the consent checkbox and toggles selection', () => {
         const checkbox = 'label.checkbox input[type="checkbox"]';
       
         // Click to check
         cy.get(checkbox)
           .click()
           .should('be.checked');
       
         // Click again to uncheck
         cy.get(checkbox)
           .click()
           .should('not.be.checked');
       });
       */
})
/*Test Case 09 - Validate the SUBMIT button
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the “SUBMIT” button is displayed
Validate the “SUBMIT” button is clickable
Validate that the button text is “SUBMIT”
 */

describe('Test Case 09 - Validate the SUBMIT button', () => {

    it('Validates the "SUBMIT" button is displayed', () => {
        cy.get('button.button.is-link[type="submit"]')
            .should('be.visible');
    })
    it('Validates the "SUBMIT" button is clickable', () => {
        cy.get('button.button.is-link[type="submit"]')
            .should('not.be.disabled');
    })
    it('Validates that the button text is "SUBMIT"', () => {
        cy.get('button.button.is-link[type="submit"]')
            .should('have.text', 'SUBMIT');
    })
})

/*Test Case 10 - Validate the form submission
Navigate to https://techglobal-training.com/frontend/form-elements
Enter a first name
Select a gender
Enter an address
Enter an email
Enter a phone number
Enter a message
Select the “I give my consent to be contacted.” checkbox
Click on the “SUBMIT” button
Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
 */
describe('Test Case 10 - Validate the form submission', () => {
    it('Test Case 10 - Validates the form submission flow', () => {
        cy.get('input[placeholder="Enter your full name"]')
            .type('James Bond')
        cy.contains('label', 'Male')
            .find('input[type="radio"]')
            .check()
        cy.get('input[placeholder="Enter your address"]')
            .type('123 Bond Street')
        cy.get('input[placeholder="Enter your email"]')
            .type('bond@yahoo.com')
        cy.get('input[placeholder="Enter your phone number"]')
            .type('1230000007')

        cy.get('textarea[placeholder="Type your message here..."]')
            .type('This is a Bonds message.')
        cy.get('label.checkbox input[type="checkbox"]')
            .check().should('be.checked')
        cy.get('button[type="submit"]')
            .click()
        cy.contains('Thanks for submitting!')
            .should('be.visible')
            cy.on('uncaught:exception', () => {
                return false
              })
    })
})