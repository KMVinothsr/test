import { test, expect } from '@playwright/test';

test('MultipleDrop', async ({ page }) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors',['red','green']);

    await page.waitForTimeout(3000)

})