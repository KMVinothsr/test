import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect(await page).toHaveTitle('Automation Testing Practice: PlaywrightPractice');

    await page.getByPlaceholder('Enter your full name').fill('Vinothkumar');

    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('9500883688');

    await page.getByLabel('Email Address:').fill('kmvinothcse@gmail.com');

    await expect (await page.getByText("//section[@id='role-locators']")).toBeVisible();

})