import objects from '../PageObjects/objects'

const obj = new objects()


// SCENARIO: Registering as New User
Given('User navigates to the website and go to registration page', () => {

    obj.visit()
    obj.Login()
    obj.registration()
    cy.title().should('eq', 'deinBett.de - Anmelden')

})

When('User enters the data in all fields', () => {

    obj.salutation()
    obj.FillName()
    obj.FillEmail()
    obj.FillPassword()
    obj.checkagreements()

})

And('Click on Register Button', () => {

    obj.clickreg()
})

Then('New user is registered successfully and land on the Dashboard', () => {

    obj.verifyregistration()

})

Then('User is logged out successfully', () => {

    obj.Logout()

})

// SCENARIO: Login as Newly Created User

Given('User is on Login-Register Page', () => {

    obj.verifyLoginPage()

})

When('User enters username and password', () => {

    obj.EnterCredentialsforLogin()

})

And('Click Login button', () => {

    obj.clickLogin()

})

Then('User will be successfully logged in', () => {

    obj.verifyregistration

})

//Scenario: Adding items to Wishlist and then basket

Given('User is successfully logged in', () => {
    obj.verifyregistration()
})

When('User adds 5 items in wishlist', () => {
    obj.selectMattress()
    obj.selectBed()
})

And('View the wishlist', () => {
    obj.goToWishlist()
    obj.verifyItemsCount()
})

And('Add zipcode', () => {
    obj.addZipCode()
})

And('Move items from wishlist to basket', () => {
    obj.itemToBasket()
})

Then('Items are successfully added to the basket', () => {
    obj.verifyItemsCountinBasket()
})