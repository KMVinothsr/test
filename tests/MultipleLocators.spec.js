import { test, expect } from '@playwright/test';

test('Multiples', async ({ page }) => {
  await page.goto('https://www.facebook.com');

  const items = await page.$$('a');
  for (const item of items) {
    const test = await item.textContent()
    
    console.log(test);
  }
});