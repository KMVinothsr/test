import { test, expect } from '@playwright/test';

test('SDropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("#country").selectOption("India");
    await page.waitForTimeout(1000);

    await page.locator("#country").selectOption({index:5});
    await page.waitForTimeout(1000);

    await page.locator("#country").selectOption({value:"Australia"});
    await page.waitForTimeout(1000);

    await page.locator("#country").selectOption({label:"United Kingdom"});
    await page.waitForTimeout(3000);


})

test("Multiple" , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Approch1
    let value = await page.$$('#country option')
    await expect(value).toHaveCount(10);
    await page.waitForTimeout(3000);

    //Approch2
    let multiple = await page.locator('#country option')
    await expect(multiple.length).toBe(10);
    console.log(multiple.length);    
    await page.waitForTimeout(3000);

    //Approch3
    const options = await page.$$('#country option')
    let a = false;
    for(const result of options){

        console.log(await result.textContent());
        let value = await result.textContent();
        if(value.includes('India')){
            a=true;
            break;
        }
        expect(a).toBeTruthy();
    }

})