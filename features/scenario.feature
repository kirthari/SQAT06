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