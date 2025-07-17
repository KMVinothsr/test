import { test, expect } from '@playwright/test';

test('Keyboard Action', async ({ page }) =>{

    await page.goto('https://text-compare.com/');

    await page.locator('#inputText1').fill("Welcome to the Playwright");

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Control+C');

    await page.keyboard.press('Tab');

    await page.keyboard.press('Control+V');


})
