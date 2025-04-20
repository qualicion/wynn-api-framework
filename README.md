# Wynn API Framework

A lightweight TypeScript framework for API testing using Jest and Supertest.


## Setup

1. Clone this repository:
   ```
   git clone https://github.com/qualicion/wynn-api-test
   
   cd wynn-api-framework
   ```

2. Install dependencies:
   ```
   npm install
   ```


## Project Structure

wynn-api-framework/
├── config/
│   └── base.config.ts      # Base configuration settings
├── controller/
│   └── main.controller.ts  # API request handling logic
├── data/
│   └── route.data.ts       # Test data for API requests
├── specs/
│   ├── create-post.spec.ts # Create operation tests
│   ├── delete-post.spec.ts # Delete operation tests
│   ├── get-post.spec.ts    # Get operation tests
│   └── update-post.spec.ts # Update operation tests
├── utils/
│   └── validators.ts       # Response validation helpers
├── jest.config.js          # Jest configuration
├── package-lock.json
├── package.json
└── README.md


## Running Tests

### Run all tests

```
npm test
```

### Run GET operations tests

```
npm run test:get
```

### Run POST operations tests

```
npm run test:create
```

### Run PUT/PATCH operations tests

```
npm run test:update
```

### Run DELETE operations tests

```
npm run test:delete
```

## Debugging Tests

### Run tests in debug mode
npm test -- --debug

### Run with code coverage
npm test -- --coverage


## Dependencies

- Jest: Testing framework
- Supertest: HTTP assertions library
- ts-jest: TypeScript integration for Jest
