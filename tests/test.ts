import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto("https://about.linkedin.com/coronavirus-resource-hub/online-courses");
   
  await page.getByText('Explore more').click();
  //await page.getByText('Hari').dblclick();
  await page.getByText('Hari').click({modifiers:['Shift']});
    
   
    await page.waitForTimeout(6000);
    await page.close();
   

});