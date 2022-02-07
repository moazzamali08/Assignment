# Testing  

DeinBett Assignment - Using Cypress, Cucumber and Gherkin

## For Running Locally
---
#### Pre-Requisites
- Git should be installed on the system
- Download Node from the following link: https://nodejs.org/en/download/

### Clone Project
```
git clone https://github.com/sadafmunir42/Assignment.git
```

### Install Cypress
- Open Command Line and Go to Project Directory i.e. cd Assignment/assignment
- Run following commands:
```
npm install cypress --save-dev
```

### Running the tests in GUI mode
```
npm run cy:open
```

### Running the tests in headless mode
```
npm run cy:run
```

### Running the test in Chrome Browser (Headless)
```
npm run cy:run:chrome
```


## For Running using Docker
---
#### Pre-Requisites

- Docker should be installed on the system
- Open Command Line and Go to the directory where Dockerfile is placed

### Run all tests in Docker

Note: In Dockerfile,  cypress/base:17.3.0 is used (https://hub.docker.com/r/cypress/base)
```
docker build -t cypress .
```


