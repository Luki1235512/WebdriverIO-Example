@automationexercise
Feature: User Registration on Automation Exercise

  Scenario: Register a new user successfully
    Given I am on the homepage
    When I click on Signup/Login button
    And I enter name and email address
    And I click Signup button
    Then I should see "Enter Account Information" text
    When I fill in account details
    And I fill in address information
    And I click Create Account button
    Then I should see "Account Created!" text
    When I click Continue button
    Then I should see "Logged in as" text

