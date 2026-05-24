import { Given } from "@wdio/cucumber-framework";
import { testContext } from "../context/test-context.js";

interface CreateAccountResponse {
  responseCode: number;
  message: string;
}

Given(/^I have registered user via API$/, async () => {
  const timestamp = Date.now();
  testContext.name = `TestUser${timestamp}`;
  testContext.email = `testuser${timestamp}@example.com`;
  testContext.password = "TestPassword123!";

  const params = new URLSearchParams({
    name: testContext.name,
    email: testContext.email,
    password: testContext.password,
    title: "Mr",
    birth_date: "1",
    birth_month: "1",
    birth_year: "1970",
    firstname: "John",
    lastname: "Doe",
    company: "Test Company",
    address1: "Test Street 123",
    address2: "Address 2",
    country: "United States",
    zipcode: "90001",
    state: "California",
    city: "Los Angeles",
    mobile_number: "1234567890",
  });

  const response = await fetch(
    "https://automationexercise.com/api/createAccount",
    {
      method: "POST",
      body: params,
    },
  );

  const data = (await response.json()) as CreateAccountResponse;
  if (data.responseCode !== 201) {
    throw new Error(`Failed to create test user: ${data.message}`);
  }

  console.log(`User created: ${testContext.email}:${testContext.password}`);
});
