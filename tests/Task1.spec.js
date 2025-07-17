import {test,expect} from '@playwright/test'

test("Radio Task" ,  async ({ page }) =>{

    await page.goto('https://www.makemytrip.com/');

    await page.locator("//span[@class='commonModal__close']").click();

    await page.locator("//input[@id='fromCity']",'Coimbatore');

    await page.locator("//input[@id='toCity']",'Chennai');

    await page.locator("(//input[contains(@type,'radio')])[2]").check();

    await expect (await page.locator("(//input[contains(@type,'radio')])[2]")).isChecked().toBeTruthy();

    await page.locator("(//input[contains(@type,'radio')])[3]").isChecked().toBeFalsy();

    await page.locator("//p[@class='makeFlex vrtlCenter ']").click();
    
    await page.waitForTimeout(3000);

  

})