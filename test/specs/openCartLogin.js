
const register = require( "../pageobjects/openCartLoginPOM.js")
describe('Opencart', () => {
    it('Registering for the new User', async() => {
        await browser.url("http://opencart.abstracta.us/index.php?route=common/home")
        await browser.maximizeWindow()
      await  register.accountDropdown()
      await register.register()
      await register.enterThePersonalDetails("Swetha","Swe","automationabc@gmail.com","8238441890","Swetha53@","Swetha53@")
     await register.continue1()
     await browser.pause(5000)
       
    });
});
//test\specs\openCartLogin.js
