import { test, expect } from '@playwright/test';

var path = "screenshots/";

test('Verify some things on the homepage', async ({ page }) => {
  await page.goto('https://healthtrustpg.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/HealthTrust - Performance/);

  // Click JOIN text
  const waitForJoin = await page.locator('text=Join');

  if(waitForJoin)
  {
    await page.locator('text=Join').click();

      // wait for 3 second
      await page.waitForTimeout(3000);

      //Take a screenshot of the current page (which should be the unsubmitted form)
      const expectText = await page.$$("text='HealthTrust Membership'");
      if (!expectText) 
      {
        await page.screenshot({ path: path+"Form"+'.png', fullPage: false });
      }
      else
      {
        // wait for 3 second
        await page.waitForTimeout(3000);

        //click Start the Conversation
        //await page.locator('text=Start the Conversation').click();

        //Maybe fill the form out

        //now stay on course with the task - click Careers (not the Title one)
        await page.locator('text=Careers').first().click();

        const expText = await page.$$("text='Search Job Opportunities'");
          if (!expText) 
          {
            await page.screenshot({ path: path+"Career"+'.png', fullPage: false });
          }
          else
          {
            //click Search Job Opportunities button
            await page.locator('text=Search Job Opportunities').click();

            // wait for 3 second
            await page.waitForTimeout(3000);

          }
        }
      }
  }
);

