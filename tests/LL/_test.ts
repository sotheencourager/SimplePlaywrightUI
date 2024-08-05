import { test, expect } from '@playwright/test';

test('User Action', async ({ page }) => 
    {

    await page.goto("https://about.linkedin.com/coronavirus-resource-hub/online-courses");

    await page.getByText('Explore more').click();
    //await page.waitForTimeout(4000);
    // await page.getByText('Hari Srinivasan').dblclick();
    // await page.waitForTimeout(8000);

//     await page.getByText('Hari Srinivasan').click({button:'right'});
//    await page.waitForTimeout(4000);

   await page.getByText('Hari Srinivasan').click({ modifiers: ['Shift'] });
   await page.waitForTimeout(6000);
   await page.close();




});