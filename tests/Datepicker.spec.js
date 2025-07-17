import { test, expect } from '@playwright/test';

test('Datepicker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.fill('#datepicker',"07/11/2025");
    await page.waitForTimeout(2000);
    
})
