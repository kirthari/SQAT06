Feature: sign up 
  In order to do sign up
  As a user
  I want to sign up/log in to the site

Scenario: successful sign up
    Given I go to Figure1 registration page
    When I enter create account
    Then I should see the result for sign up error