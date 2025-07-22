import {test,expect} from '@playwright/test'

import { request} from 'http'

test ("Post Method" ,  async ({request})=>{

    const response = await request.post('https://reqres.in/api/users',{
        data:{
                name: "morpheus",
                job: "leader",
            },
        headers:{"x-api-key":"reqres-free-v1"}
    });
    const result = await response.json();
    expect(response.status()).toBe(201);
    expect(result.name).toBe("morpheus");
})

test('Get Method', async ({request})=>{

    const response = await request.get('https://reqres.in/api/users?page=2');
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.data[2].id).toBe(9);
});

test('Put Method',async ({request})=> {

    
})

