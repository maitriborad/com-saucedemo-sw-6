package com.saucedemo.www.pages;

import com.saucedemo.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//span[@class='title']")
    WebElement headingText;
    @CacheLookup
    @FindBy(xpath = "//div[@class='inventory_item']")
    List<WebElement> number;
    public String getHeadingText(){
        String message = getTextFromElement(headingText);
        log.info("Getting text from element : " + headingText.toString());
        return message;
    }
    public int countItems(){
        log.info("count items : " + number.toString());
        return countItem(number);
    }
}
