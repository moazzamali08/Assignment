Feature: Testing DeinBett WebSite

    I want to test few Scenarios on Testing DeinBett Website

    Scenario: Register as new user
        Given User navigates to the website and go to registration page
        When User enters the data in all fields
        And Click on Register Button
        Then New user is registered successfully and land on the Dashboard
        Then User is logged out successfully


    Scenario: Login with New User
        Given User is on Login-Register Page
        When User enters username and password
        And Click Login button
        Then User will be successfully logged in


    Scenario: Adding items to Wishlist and then basket
        Given User is successfully logged in
        When User adds 5 items in wishlist
        And View the wishlist
        And Add zipcode
        And Move items from wishlist to basket
        Then Items are successfully added to the basket




