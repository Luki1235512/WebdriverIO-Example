@automationexercise
Feature: User Login on Automation Exercise

  Background:
    Given I have registered user via API

  Scenario: Login User with correct email and password
    Given I am on the homepage
    Then I should see the home page
    When I click on "Signup / Login" button
    Then I should see "Login to your account" text
    When I enter correct email address and password
    And I click "login" button
    Then I should see "Logged in as" username
    When I click "Delete Account" button
    Then I should see "Account Deleted!" text

  Scenario: Login User with incorrect email and password
    Given I am on the homepage
    Then I should see the home page
    When I click on "Signup / Login" button
    Then I should see "Login to your account" text
    When I enter incorrect email address and password
    And I click "login" button
    Then I should see "Your email or password is incorrect!" error 

  Scenario: Logout User
    Given I am on the homepage
    Then I should see the home page
    When I click on "Signup / Login" button
    Then I should see "Login to your account" text
    When I enter correct email address and password
    And I click "login" button
    Then I should see "Logged in as" username
    When I click "Logout" button
    Then I should see "Login to your account" text