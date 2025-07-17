import {test ,expect} from '@playwright/test'

test("Screenshot" , async ({page})=>{

    await page.goto('https://www.amazon.in/')

    await page.screenshot({path:"test/screenshot/" + Date.now() + "mpage.png" , fullPage:true})

    await page.goto('https://hilightinfotech.com/')

    await page.screenshot({path:"test/screenshot/" + "hit.png" , fullPage:true})

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    
})