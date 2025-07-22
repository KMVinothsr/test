import { test, expect } from '@playwright/test';

test('Mouse Action', async ({ page }) => {

    await page.goto('https://www.myntra.com/');

    let move = await page.locator("//a[@data-index='2']");

    await move.hover();

    await expect(move).toBeEnabled();

    await page.waitForTimeout(1000);


})

test("Right Click", async({page})=>{

    await page.goto('https://www.amazon.com/')

    let link = await page.locator("//a[text()='Click here to go to amazon.com']");

    await link.click({button:'right'})

    await page.waitForTimeout(2000)
})

test('Double Click',async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.mouse.wheel(0,1200)

    let double = await page.locator("//button[text()='Copy Text']")

    await double.dblclick();

    let verify = await page.locator('#field');

    await expect(verify).toHaveValue("Hello World")


})

// test("Drog Drop",async ({page}) =>{

// })