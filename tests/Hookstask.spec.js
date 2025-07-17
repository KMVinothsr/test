import { test, expect } from '@playwright/test';

let page;


test.beforeAll('Hooks Task', async ({browser}) => {  
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click();
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.locator("//button[text()='Log in']").click()

})

// test("Multiple",async({})=>{
//     let Pro = await page.$$('//div[@class="col-lg-4 col-md-6 mb-4"]');
//     await expect(Pro).toHaveCount(9);

// })

test("product", async({})=>{

    await page.locator("//a[text()='Nokia lumia 1520']").click();
    await page.locator("//a[@class='btn btn-success btn-lg']").click();
    await page.on('Alert',dialog => {
        expect(dialog.message()).toContain('Product added.');
        dialog.accept()

    });
    
})

test('verify',async()=>{
await page.click('#cartur');
})

test.afterAll("Logout",async({})=>{
    await page.locator('#logout2').click();
    await page.waitForTimeout(3000);
})
