@automationexercise
Feature: User Registration on Automation Exercise

  Scenario: Register User
    Given I am on the homepage
    Then I should see the home page
    When I click on "Signup / Login" button
    Then I should see "New User Signup!" text
    When I enter name and email address
    And I click "Signup" button
    Then I should see "Enter Account Information" text
    When I fill in account information details
    And I select Sign up for our newsletter! checkbox
    And I select Receive special offers from our partners! checkbox
    And I fill in address information details
    And I click "Create Account" button
    Then I should see "Account Created!" text
    When I click "Continue" button
    Then I should see "Logged in as" username
    When I click "Delete Account" button
    Then I should see "Account Deleted!" text
    And I click "Continue" button
