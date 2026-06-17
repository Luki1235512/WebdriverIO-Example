@automationexercise
Feature: Contact Us form on Automation Exercise

  Background:
    Given I am on the homepage
    Given I should see the home page

  Scenario: Contact Us Form
    When I click on "Contact Us" button
    Then I verify "GET IN TOUCH" is visible
    When I enter name, email, subject and message
    And I upload file
    And I click "Submit" button
    And I click OK button
    Then I verify success message "Success! Your details have been submitted successfully." is visible
    Then I click "Home" button and verify that landed to home page successfully