Feature: Registration

    I want to register as new user

    Scenario: Register as new user
        Given Navigate to the website and go to registration page
        When I enter the data in all fields
        And Click on Register Button
        Then New user will be registered successfully