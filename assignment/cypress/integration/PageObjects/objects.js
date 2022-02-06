/// <reference types = "Cypress"/>

class objects {

    visit() {
        cy.visit('https://www.deinbett.de/');           //opening website
        const button = cy.get('[data-accept-action="all"] > .button')  //Accepting cookies if popup appears
        button.then($button => {
            if ($button.is(':visible')) {
                button.click()
            }
        })
    }


    Login() {
        const button = cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon')
        button.click() // Clicking on Login/Register Button
        const button1 = cy.get('[data-accept-action="all"] > .button') //Accepting cookies if popup appears
        button1.then($button1 => {
            if ($button1.is(':visible')) {
                button1.click()
            }
        })
    }
    registration() {

        const button1 = cy.get('[id=registerAccount]')
        button1.click()  // Clicking on Registration Button

    }
    rand() {

        const RandExp = require('randexp'); //Package install and it is used to generate random string using regex
        const rand = new RandExp('^([A-Za-z]){5}([0-9]){2}$').gen();  // Generating random string for Email
        return rand
    }
    randpass() {

        const RandExp = require('randexp');
        const rand = new RandExp('^([a-zA-Z]){2}([A-Z]){1}([0-9]){3}([a-z]){3}[!@$%^&*()_+=-]{1}$').gen(); // Generating random string for Password
        return rand
    }
    randname() {

        const RandExp = require('randexp');
        const rand = new RandExp('^([A-Z][a-z]){5,8}$').gen(); // Generating random string for First and Last Name
        return rand
    }

    salutation() {
        const dropdownLength = 2
        const select = cy.get('[id=salutation]').children('option').its('length').should('eq', dropdownLength) // Verifying Dropdown Length
        const random = Math.floor((Math.random() * dropdownLength)) // Generating random index of dropdown
        cy.get('[id=salutation]').select([random]) // Selecting random value from dropdown
    }


    FillName() {

        const string = this.randname() // Generating random first name
        cy.get('#firstName').type(string) // Typing first name in the respective field

        const string1 = this.randname() // Generating random last name
        cy.get('#lastName').type(string1) // Typing last name in the respective field

    }
    FillEmail() {

        const string = this.rand() // Generating string for random email
        cy.get('.formInput__inputContainer > #email').type(string + '@gmail.com') // Concatenating the generated string with the gmail domain and typing it in Email field
        cy.writeFile('path/to/username.txt', string + '@gmail.com') // Saving the generated email address in a file
    }


    FillPassword() {
        const string = this.randpass() // Generating string for random password
        cy.get('#password').type(string) // Typing the random password in the password field 
        cy.get('#password2').type(string) // Typing the same password second time 
        cy.writeFile('path/to/password.txt', string) // Saving the password in a file

    }
    checkagreements() {
        cy.get('.accountNew__newsletterCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox').click() // Checking the agreement checkbox
        cy.get('.accountNew__agbCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox').click() // Checking the agreement checkbox
    }

    clickreg() {
        cy.get('#register-submit').click() // Clicking on Register button and registering the user


    }
    verifyregistration() {
        cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix')
            .should('have.text', 'Dein Konto') // Assertion: User is registered and successfully logged in upon registration
    }


    Logout() {
        cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon').click() // Clicking on Your account
        cy.get('.sidebarNavigation__rootChild').click() // Clicking on logout

    }

    verifyLoginPage() {
        cy.url().should('eq', 'https://www.deinbett.de/login') //Assertion: Comparing url to check user is on login page
    }

    EnterCredentialsforLogin() {
        this.Login()
        cy.readFile('path/to/username.txt').then((text) => { // Reading email from file
            cy.get('#loginEmail').type(text) // Typing the email in the email field
        })
        cy.readFile('path/to/password.txt').then((text) => { // Reading password from file
            cy.get('#loginPassword').type(text) // Typing the password in password field 
        })

    }

    clickLogin() {
        const button = cy.get('[id=login-submit]')
        button.click() // Clicking on login button
    }

    selectMattress() {
        const button1 = cy.get('[data-accept-action="all"] > .button') // Accepting cookies if popup appears
        button1.then($button1 => {
            if ($button1.is(':visible')) {
                button1.click()
            }
        })

        cy.get(':nth-child(2) > .menu__link > .menu__linkHref > .menuLinkTitles > span').click() // Select Mattress from Top Menu
        // Selecting Mattress by Art from sub-menu
        cy.get('#Matratzen > span > ul > span.flyoutMenu__column.flyoutMenuColumns--Matratzen > li:nth-child(1) > span > span.flyoutTile__Headline.flyoutTile__Headline--selected > a').click()
        cy.get('[data-tile-position="1"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click() // Selecting Mattress 1 for Wishlist
        cy.get('[data-tile-position="2"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click() // Selecting Mattress 2 for Wishlist
        cy.get('[data-tile-position="9"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click() // Selecting Mattress 3 for Wishlist
    }

    selectBed() {
        cy.scrollTo('top') // Scrolling to Top to see Wishlist Icon
        cy.get('.menu > :nth-child(1) > .menu__link > .menu__linkHref > .menuLinkTitles > span').click() // Clicking on Bed Menu
        // Selecting Bed by Art from sub-menu
        cy.get('#Betten > span > ul > span.flyoutMenu__column.flyoutMenuColumns--Betten > li:nth-child(1) > span > span.flyoutTile__Headline > a').click()
        cy.wait(500) // Waiting for sub-menu list to disappear
        cy.get('[data-tile-position="1"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click() // Selecting Bed 1 for Wishlist
        cy.get('[data-tile-position="2"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click() // Selecting Bed 2 for Wishlist
    }

    goToWishlist() {
        cy.wait(1000) // Waiting for Beds to be added to wishlist
        cy.scrollTo('top') // Scrolling to the top
        cy.get('.headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__icon').click() // Clicking on the wishlist icon
    }

    verifyItemsCount() {
        cy.get('[class=wishlistEntry]').should('have.length', 5) // Verifying that there are 5 items in the wishlist
    }

    addZipCode() {
        //Opening an item details
        cy.get('[data-wishlist-entry-id="853966"] > .wishlistEntry__articleInformation > .wishlistEntry__articleDetailPageButton > .button').click()
        cy.scrollTo(0, 500) // Scrolling bit down to the zip code field
        cy.get('#zipcode-logistic-input').type('10115') // Entering zip code
    }
    itemToBasket() {
        cy.wait(500)
        this.goToWishlist() // Clicking on the wishlist icon
        cy.scrollTo('bottom') // Scrolling to bottom
        cy.get('#addAddToWishlist').click() // Adding all the items to the basket by clicking on the add all button at the bottom
        // Clicking on cart to view items
        cy.get('#overlayRight > .generalOverlay > .generalOverlay__content > .addToCartOverlay > .addToCartOverlay__footer > .addToCartOverlay__footerToCart > .addToCartOverlay__footerButton > .button').click()


    }
    verifyItemsCountinBasket() {
        cy.get('[class=cartEntry__closeButton').should('have.length', '5')
        
    }
}

export default objects 