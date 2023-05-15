Feature: Login Test
  As a user I want to login into SauceDemo website

  @smoke @regression
  Scenario: User should Login successfully with valid credentials
    Given I am on login page
    When I enter email "standard_user"
    And I enter password "secret_sauce"
    And I click on login Button
    Then I should navigate to login page successfully

  @sanity @regression
  Scenario: Verify that six products are displayed on the page
    Given I am on login page
    When I enter email "standard_user"
    And I enter password "secret_sauce"
    And I click on login Button
    Then Six products should be displayed on that page

