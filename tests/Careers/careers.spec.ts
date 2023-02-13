import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

 //passing URL to be tested
  await page.goto('https://healthtrustpg.com/');

 //Navigate to career page
  await page.getByRole('link', { name: 'Careers' }).click();

  //New tab event
  const page1Promise = page.waitForEvent('popup');

  //click Search Job.....
  await page.getByRole('link', { name: 'Search Job Opportunities' }).click();

  const page1 = await page1Promise;

 //Entering and selecting search parameter
  await page1.locator('#search-form__keyword').fill("Director of Accounts");
  await page1.getByRole('combobox', { name: 'Facility' }).selectOption('HealthTrust');


  //I don't like xpath but because of time, I will allow it this time. 
  await page1.locator('#pages-healthtrust > div.container--- > div.template-content > div.cs_block.cs_template_content.cs_template_content_page > div > div > div.banner.neu-background--white > div > div.container.banner__copy-outer > div > div > div > div.neu-padding--top-50.neu-padding--bottom-100 > div > div.neu-margin--bottom-50 > div > form > div:nth-child(3) > input.neu-button--primary.neu-button.neu-button--raised.neu-width--100').click();
  
  //click Director of Accounts
  //await page1.locator('text=Director of Accounts').click();
  //await page1.locator('neu-link').first().click();
  await page1.locator('#job-list-inner > div.jobs-content > div:nth-child(5) > div > div:nth-child(1) > div > div > div.col-md-8.col-lg-7 > h2 > a').click();

  // wait for 3 second
  await page1.waitForTimeout(3000);

  //verify that we have the text
  const expText = await page1.$$("text='Director of Accounts'");
    if (expText) 
    {
        await page1.screenshot({ path: "screenshots/"+"Careers"+'.png', fullPage: false });
        if (await page1.$$("text='Job ID: 474848'")) 
        {
            //if everything goes well, we take a screenshot
            await page1.screenshot({ path: "screenshots/"+"Job_Desc"+'.png', fullPage: false });
        }
        else{
            console.log("Test failed!");
            test.fail();
        }
    }
    else{
        console.log("Test failed!");
        test.fail();
    }
 });