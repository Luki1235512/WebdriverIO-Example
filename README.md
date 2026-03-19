# WebdriverIO-Example

## Test Application

**Primary**: [Automation Exercise](https://automationexercise.com/)
**Secondary**: [Sauce Demo](https://www.saucedemo.com/)

## Project Features

- Multi-layer framework (Page Object Model + Cucumber BDD)
- API + UI combined testing
- Visual regression testing
- CI/CD integration
- Docker support
- Parallel execution
- Advanced reporting (Allure)
- **Code Quality**: ESLint + Prettier for consistent code formatting
- **Pre-commit Hooks**: Husky for automated code quality checks

## Test Scenarios

- User authentication (multiple user types)
- Product management (search, filter, sort)
- Shopping cart operations
- Checkout process with validation
- API contract validation
- Cross-browser testing
- Responsive design testing

## Running Tests

### Commands

| Command        | Description   |
| -------------- | ------------- |
| `npm run wdio` | Run all tests |

### Flags

| Flag         | Description                                 | Example                                 |
| ------------ | ------------------------------------------- | --------------------------------------- |
| `--headless` | Run tests in headless mode (no browser UI)  | `npm run wdio -- --headless`            |
| `--serve`    | Serve Allure report after tests complete    | `npm run wdio -- --serve`               |
| `--@<tag>`   | Run only tests with a specific Cucumber tag | `npm run wdio -- --@automationexercise` |

### Examples

```sh
# Run all tests in headless mode
npm run wdio -- --headless

# Run only automationexercise tests
npm run wdio -- --@automationexercise

# Run only herokuapp tests with report
npm run wdio -- --@herokuapp --serve

# Run automationexercise tests headless and serve Allure report
npm run wdio -- --headless --@automationexercise --serve

# Run only register-user feature file
npm run wdio -- register-user

# Run register-user feature headless with report
npm run wdio -- register-user --headless --serve
```

## Code Quality Tools

- **ESLint**: Static code analysis and best practices enforcement
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for pre-commit validation
- **TypeScript**: Type safety and better IDE support
