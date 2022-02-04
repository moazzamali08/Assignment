import objects from '../PageObjects/objects'

const obj = new objects()

Given('Navigate to the website and go to registration page', () => {

    obj.visit()
    obj.registration()
    cy.title().should('eq', 'deinBett.de - Anmelden')

})

When('I enter the data in all fields', () => {
    obj.salutation()
    obj.FillName()
    obj.FillEmail()
    obj.FillPassword()
    obj.checkagreements()
})

And('Click on Register Button', () => {
   // obj.clickreg()
})

Then('New user will be registered successfully', () => {
    
})