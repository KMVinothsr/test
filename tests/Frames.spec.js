import {test,expect} from '@playwright/test'

test("Frames" ,  async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    let parent = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    await parent.fill('[name="mytext3"]',"Git")

    let child = await parent.childFrames();
    await child[0].locator('#i9').click();
     
    // await child[0].locator("#i24").check();
    await page.waitForTimeout(4000)
})

