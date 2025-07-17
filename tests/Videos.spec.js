import {test,expect} from '@playwright/test'

test("Videos",async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByLabel('username').fill('Admin');

    await page.locator('//input[@type="password"]').fill('admin123');

    await page.locator("//button[@type='submit']").click();
})