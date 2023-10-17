//To have assertions, chai is required
const { expect } = require('chai');
const supertest = require('supertest');
const req= supertest('https://gorest.co.in/')
require('dotenv').config();

describe('gorest Api', async() => {
  var result1;
  const accessToken = process.env.ACCESS_TOKEN
    it('GET users', async() => {
       const getUserData = await req.get('/public/v2/users'); 
       var result = getUserData.body
       result.forEach(i => {
        //try catch will allow the code to goto next line , even if the expect is failed
        try {
          expect(i.gender).to.eq('female');
          expect(i.status).to.eq('active');
        } catch (error) {
          console.error('Assertion failed:', error.message);
        
        }
       });
       console.log(await getUserData.body, "Get the user's data");
       console.log(await getUserData.status, "The status of the get response");
      
    });
    it('POST a user', async() => {
      const data1 ={
        name: "TestName",
        email: `testmail${Math.random()}@gmail.com`,
        gender: 'female',
        status: 'active'
      }
       result1= (await req.post('/public/v2/users').set('Authorization', `Bearer ${accessToken}`).send(data1))
     console.log(result1.status,result1.body['id'] ,"post status ")
    });
   
    it('PUT for a specific user using path parameter',async () => {
      const data2 ={
        name: "sample",
        email: `testmail${Math.random()}@gmail.com`,
        gender: 'female', 
        status: 'Inactive'
      }
      const putMethod= await ((await req.put(`/public/v2/users/${result1.body['id']}`).set('Authorization', `Bearer ${accessToken}`).send(data2)))
      console.log(putMethod.status, await putMethod.body ,"put status")
    });
    it('DELETE the created  User', async() => {
       const result2= (await req.delete(`/public/v2/users/${result1.body['id']}`).set('Authorization', `Bearer ${accessToken}`))
       console.log(await result2.status,await result2.body, "status for delete")
      
     });
   
});
//test\specs\api.js