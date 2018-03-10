Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

Scenario: easy maths
    Given I go to duck duck go
    When  I search for WebdriverIO
    Then  I should see the search results

Scenario: bing
    Given I go to bing
    When  I search for google
    Then  I should see the search result for bing

Scenario: google
    Given I go to google
    When  I search for bing
    Then  I should see the search result for google
    
    Scenario: figure2
    Given I go to Figure2 registration page
    When  I enter create to account
    Then  I should see the result for sign up

    Scenario: figure1
    Given I go to Figure1 registration page
    When  I enter create account
    Then  I should see the result for sign up error