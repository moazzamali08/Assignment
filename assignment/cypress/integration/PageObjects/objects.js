/// <reference types = "Cypress"/>

class objects {

    visit() {
        cy.visit('https://www.deinbett.de/');
        const button = cy.get('[data-accept-action="all"] > .button')
        button.then($button => {
            if ($button.is(':visible')) {
                button.click()
            }
        })
    }


    Login() {
        const button = cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon')
        button.click()
        const button1 = cy.get('[data-accept-action="all"] > .button')
        button1.then($button1 => {
            if ($button1.is(':visible')) {
                button1.click()
            }
        })
    }
    registration() {

        const button1 = cy.get('[id=registerAccount]')
        button1.click()

    }
    rand() {

        const RandExp = require('randexp');
        const rand = new RandExp('^([A-Za-z]){5}([0-9]){2}$').gen();
        return rand
    }
    randpass() {

        const RandExp = require('randexp');
        const rand = new RandExp('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}[!@$%^&*()_+=-]{1}$').gen();
        return rand
    }
    randname() {

        const RandExp = require('randexp');
        const rand = new RandExp('^([A-Z][a-z]){5,8}$').gen();
        return rand
    }

    salutation() {
        const dropdownLength = 2
        const select = cy.get('[id=salutation]').children('option').its('length').should('eq', dropdownLength)
        const random = Math.floor((Math.random() * dropdownLength))
        cy.get('[id=salutation]').select([random])
    }


    FillName() {

        const string = this.randname()
        cy.get('#firstName').type(string)

        const string1 = this.randname()
        cy.get('#lastName').type(string1)

    }
    FillEmail() {
        var arr = ''
        const string = this.rand()
        cy.get('.formInput__inputContainer > #email').type(string + '@gmail.com')
        cy.writeFile('path/to/username.txt', string + '@gmail.com')
    }


    FillPassword() {
        const string = this.randpass()
        cy.get('#password').type(string)
        cy.get('#password2').type(string)
        cy.writeFile('path/to/password.txt', string)

    }
    checkagreements() {
        cy.get('.accountNew__newsletterCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox').click()
        cy.get('.accountNew__agbCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox').click()
    }

    clickreg() {
        cy.get('#register-submit').click()


    }
    verifyregistration() {
        cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix')
            .should('have.text', 'Dein Konto')
    }


    Logout() {
        cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon').click()
        cy.get('.sidebarNavigation__rootChild').click()

    }

    verifyLoginPage() {
        cy.url().should('eq', 'https://www.deinbett.de/login')
    }

    EnterCredentialsforLogin() {
        this.Login()
        cy.readFile('path/to/username.txt').then((text) => {
            const string = text
            cy.get('#loginEmail').type(string)
        })
        cy.readFile('path/to/password.txt').then((text) => {
            const string = text
            cy.get('#loginPassword').type(string)
        })

    }

    clickLogin() {
        const button = cy.get('[id=login-submit]')
        button.click()
    }

    selectMattress() {
        const button1 = cy.get('[data-accept-action="all"] > .button')
        button1.then($button1 => {
            if ($button1.is(':visible')) {
                button1.click()
            }
        })
        //:nth-child(2) > .menu__link > .menu__linkHref > .menuLinkTitles
        cy.get(':nth-child(2) > .menu__link > .menu__linkHref > .menuLinkTitles > span').click()
        cy.get('#Matratzen > span > ul > span.flyoutMenu__column.flyoutMenuColumns--Matratzen > li:nth-child(1) > span > span.flyoutTile__Headline.flyoutTile__Headline--selected > a').click()
        cy.get('[data-tile-position="1"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click()
        cy.get('[data-tile-position="2"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click()
        cy.get('[data-tile-position="9"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click()
    }

    selectBed() {
        cy.scrollTo('top')
        cy.get('.menu > :nth-child(1) > .menu__link > .menu__linkHref > .menuLinkTitles > span').click()
        cy.get('#Betten > span > ul > span.flyoutMenu__column.flyoutMenuColumns--Betten > li:nth-child(1) > span > span.flyoutTile__Headline > a').click()
        cy.get('[data-tile-position="1"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click()
        cy.get('[data-tile-position="2"] > .articleTile__content > .articleTile__wishlist > .wishlistIcon').click()
    }

    goToWishlist() {
        cy.wait(1000)
        cy.scrollTo('top')
        cy.get('.headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__icon').click()
    }

}

export default objects 