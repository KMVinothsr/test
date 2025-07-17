import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByLabel('Sorted List:').selectOption('lion');
  
});