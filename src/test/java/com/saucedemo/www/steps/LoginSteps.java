package com.saucedemo.www.steps;

import com.saucedemo.www.pages.HomePage;
import com.saucedemo.www.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on login page$")
    public void iAmOnLoginPage() {
    }
    @When("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login Button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals("Products", new HomePage().getHeadingText(),"Login is not successful");
    }

    @Then("^Six products should be displayed on that page$")
    public void sixProductsShouldBeDisplayedOnThatPage() {
        Assert.assertEquals(6,new HomePage().countItems(),"Items not displayed correctly");
    }
}
