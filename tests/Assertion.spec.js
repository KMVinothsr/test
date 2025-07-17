import { test, expect } from '@playwright/test';

test('Assertion', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect (await page.toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html'));

    await page.getByPlaceholder('Enter your full name').fill('Vinothkumar');

    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('9500883688');

    await page.getByRole('button', { type:'submit' }).click();

    // const check = page.getByText(' Accept terms');
    // await expect(check).toBeChecked();
    
    
    const check1 = page.getByRole('type = checkbox');
    await expect(check1).toBeChecked();

    await expect (await page.getByAltText('Playwright Logo')).toBeVisible();

    await page.locator(("//div[@class='card']")[3]).toHaveText('Click the button above to submit your information.');

    await expect (await page.locator("//input[@value='express']")).toBeEnabled();

    const task = await page.locator("//p[contains(text()='Locate elements by their explicit or implicit ARIA')]")
    await expect(task).toHaveText('Locate elements by their explicit or implicit ARIA roles.');

    
});