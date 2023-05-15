$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I want to login into SauceDemo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 59602569800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 1039543800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 2095256700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 329047100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2324818100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 693371700,
  "status": "passed"
});
formatter.after({
  "duration": 1658535500,
  "status": "passed"
});
formatter.before({
  "duration": 53344145200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that six products are displayed on the page",
  "description": "",
  "id": "login-test;verify-that-six-products-are-displayed-on-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter email \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Six products should be displayed on that page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 69600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 6254294600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 510311800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1721984500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.sixProductsShouldBeDisplayedOnThatPage()"
});
formatter.result({
  "duration": 351578100,
  "status": "passed"
});
formatter.after({
  "duration": 1898025400,
  "status": "passed"
});
});