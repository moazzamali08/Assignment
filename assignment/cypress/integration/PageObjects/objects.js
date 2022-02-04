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


    registration() {

        const button = cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon')
        button.click()

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
        const rand = new RandExp('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}[!@#$%^&*()_+=-]{1}$').gen();
        return rand
    }
    randname() {

        const RandExp = require('randexp');
        const rand = new RandExp('^([A-Z][a-z]){5,8}$').gen();
        return rand
    }

    salutation() {

        const select = cy.get('#salutation')
        // fetch all options within the dropdown
        const options = select.children;
        // generate a random number between 0 and the total amount of options
        // the number will always be an index within the bounds of the array (options) 
        const random = Math.floor(Math.random() * options.length);
        // set the value of the dropdown to a random option
        select.value = options[random].value;
    }


    FillName() {

        const string = this.randname()
        cy.get('#firstName').type(string)

        const string1 = this.randname()
        cy.get('#lastName').type(string1)

    }
    FillEmail() {
        const string = this.rand()
        cy.get('.formInput__inputContainer > #email').type(string + '@gmail.com')
    }

    FillPassword() {
        const string = this.randpass()
        cy.get('#password').type(string)
        cy.get('#password2').type(string)

    }
    checkagreements() {
        cy.get('.accountNew__newsletterCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox').click()
        cy.get('.accountNew__agbCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox').click()
    }

    clickreg() {
        cy.get('#register-submit').click()
        cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix')
            .should('have.text', 'Dein Konto')
    }


}

export default objects 