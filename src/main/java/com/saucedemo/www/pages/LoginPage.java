package com.saucedemo.www.pages;

import com.saucedemo.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id = "user-name")
    WebElement emailField;
    @CacheLookup
    @FindBy(id = "password")
    WebElement passwordField;
    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginButton;
    public void enterEmailId(String email){
        sendTextToElement(emailField, email);
        log.info("Enter email : " + email + emailField.toString());
    }
    public void enterPassword(String password){
        sendTextToElement(passwordField, password);
        log.info("Enter password : " + password + passwordField.toString());
    }
    public void clickOnLoginButton(){
        clickOnElement(loginButton);
        log.info("Click on login button : " + loginButton.toString());
    }
}
