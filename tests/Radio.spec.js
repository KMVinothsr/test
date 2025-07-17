import {test,expect} from '@playwright/test'

test('Radio', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#male').check();

    await expect (page.locator('#male')).toBeChecked();

    await expect (page.locator('#male').isChecked()).toBeTruthy();

    await page.waitForTimeout(5000);
})

test.only('check',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const multicheck = await page.$$("//div[@class='form-check form-check-inline']//input[@type='checkbox']");

    for(const check of multicheck){
        const ischecked = await check.isChecked();
        if(!ischecked){
            await check.check();
        }
    }


    
})