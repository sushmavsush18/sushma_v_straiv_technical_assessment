import { test, expect } from '@playwright/test';

///import { chromium, Browser, BrowserContext, Page, Playwright } from 'playwright';

//test('checktitle', async ({ page }) => {
 //   await page.goto("https://www.automationexercise.com");
   // await expect(page).toHaveTitle(/Automation Exercise/);
//});
//import { test, expect } from '@playwright/test';

test('Navigate to Signup/Login page', async ({ page }) => {
    // Go to Automation Exercise home page
    await page.goto('https://automationexercise.com');

    // Click on "Signup / Login" link
    await page.locator('a:has-text("Signup / Login")').click();

    // Verify that the Login page is loaded
    await expect(page).toHaveURL("/.*login/");
});

test('Handle overlay and navigate', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  // Check and close any blocking overlay
  const overlaySelector = '.fc-dialog-overlay';
  if (await page.isVisible(overlaySelector)) {
      await page.click(`${overlaySelector} button.close`);
  }

  // Now click on "Signup / Login" without interruption
  await page.locator("a:has-text('Signup / Login')").click();
  await expect(page).toHaveURL("/.*login/");
});

test('user registration', async ({ page }) => {
    //await page.goto('https://playwright.dev/');
    test.setTimeout(60000);
  
    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/Playwright/);
    await page.goto("https://www.automationexercise.com");
    //await page.click("a[href*='/login']");
    await page.locator('a:has-text(" Signup / login")').click();
    //await page.waitForSelector('a[href="/login"]:has-text(" Signup / login")', { state: 'visible' });
    //await page.locator('a[href="/products"]:has-text("Products")').click();
    //await page.locator('a[href="/login"]:has-text(" Signup / login")').click();
    await page.locator('a[href="/login"]').scrollIntoViewIfNeeded();
    await page.locator('a[href="/login"]').click();
    //await page.click('a[href="/login"]');//:has-text(" Signup / Login")');
    //await page.waitForTimeout(50000);
    //await page.fill("input[data-qa='signup-name']", "Test User");
    // /html/body/
    //await page.locator('//header/div/div/div/div[2]/div/ul/li[4]/a/text()a').click();
    //await page.locator('//header/div/div/div/div[2]/div/ul/li[4]/a').click();
    await page.fill("input[data-qa='signup-name']", 'TestName_Sush');
    await page.fill("input[data-qa='signup-email']", "TestName_Sush@example.com");
    await page.click("button[data-qa='signup-button']");
    //const signUp = page.locator("[class='signup-form']");
    //signUp.
    const h2Element = await page.locator('h2.title text-center');
    //const text = ;
    await expect(h2Element.textContent()).toBe("Enter Account Information");

        // Fill in other registration details
        //await page.click("input#id_gender1");
        //await page.fill("input#password", "Password123!");
        //await page.selectOption("select#days", "10");
        //await page.selectOption("select#months", "April");
        //await page.selectOption("select#years", "1990");
        //await page.click("button[data-qa='create-account']");
        
        // Validate registration
        //if (await page.isVisible("text=Account Created!")) {
        //    console.log("User registration successful!");
        //}

       // await browser.close();
  });
