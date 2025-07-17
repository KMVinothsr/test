import { test, expect } from '@playwright/test';

test('Dynamic', async ({ page }) =>{

    await page.goto("https://www.hilightinfotech.com/");
  
    // const logo = page.getByAltText('Hilight Infotech Private Limited');

    // await expect(logo).toBeVisible();

    // Click the search button using CSS
    await page.locator('//div[@class="col-md-9 col-sm-9 col-xs-8"]//i').click();

    await page.getByText('SERVICES').click();

    // Assert that results appear
    await page.waitForTimeout(3000);

   
});