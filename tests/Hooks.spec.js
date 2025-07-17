    //Before All
    //After All
    //Before Each
    //After Each
import { test, expect } from '@playwright/test';


test.beforeAll('Hooks', async ({}) => {  
    console.log("Login Page");  
})
test('Search',async({})=>{
    console.log("Search Page");  
})
test('AddtoCard',async({})=>{
    console.log("Add to  Cart");  
})
test.afterAll('Logout',async({})=>{
    console.log("Logout");  
})    


