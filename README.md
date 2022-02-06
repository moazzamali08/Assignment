# Cypress 
---
Testing DeinBett Assignment - Using Cypress, Cucumber and Gherkin

### For Running Lcoally
---
#### Pre-Requisites
---
Download Node from the following link: https://nodejs.org/en/download/

---
### Install Cypress

```
npm install cypress --save-dev
```

### Running the tests

- Open cypress dashboard:
```
npm run cy:open
```

### Running the tests in headless mode
- Go to the project directory 
- Open Command Line
- Run following command:
```
npm run cy:run
```

### Running the test in Chrome Browser (Headless)

- Chrome browser:
```
npm run cy:run:chrome
```
---

### For Running using Docker
---
#### Pre-Requisites
----
Docker should be installed on the system

---

### Run all tests in Docker

Note: In Dockerfile,  cypress/base:12.1.0 is used

```
docker build -t cypress
```
---

---
