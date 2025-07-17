import { test, expect } from '@playwright/test';

test.only('File Upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles('tests/Files/download.png');

    await page.click("//button[text()='Upload Single File']")

    await page.waitForTimeout(6000);


})

test('Multiple File Upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForSelector('#multipleFilesInput');

    await page.locator('#multipleFilesInput').setInputFiles('tests/Files/download.png','tests/Files/a-png-picture.png');

    await page.click("//button[text()='Upload Multiple Files']");

    await page.waitForTimeout(4000);


})