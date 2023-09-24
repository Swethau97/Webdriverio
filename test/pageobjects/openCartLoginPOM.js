class register {
     accountDropdown()
    {   
    
         $('//a[@title="My Account"]').click()
    }
     register()
    {
         $('//a[@title="My Account"]/following-sibling::ul/li/a[text()="Register"]').click()
    }
    get firstName()
    {
        return $('//input[@id="input-firstname"]')
    }
    get lastName()
    {
        return $('//input[@id="input-lastname"]')
    }
    get email()
    {
     return $('//input[@id="input-email"]')
    }
    get telephone()
    {
        return $('//input[@id="input-telephone"]')
    }
get password()
{
return $('//input[@id="input-password"]')
}

get passworeConfirm()
{
    return $('//input[@id="input-confirm"]')
}
 agreeToTerms()
{
 $('//input[@type="checkbox"]').click()
}
 submit()
{
 $('//input[@type="submit"]').click()

}
async continue1()
{
     const waitForButton = await  $('//div[@class="pull-right"]/a[text()="Continue"]')
     await waitForButton.waitForClickable()
     await waitForButton.click()

        
}
async enterThePersonalDetails ( firstName,lastName,email ,telephone ,password,passworeConfirm)
{
    await (await this.firstName).setValue(firstName);
    await (await this.lastName).setValue(lastName);
    await (await this.email).setValue(email);
    await (await this.telephone).setValue(telephone);
    await (await this.password).setValue(password);
    await (await this.passworeConfirm).setValue(passworeConfirm);
    await this.agreeToTerms()
    await browser.pause(1500)
    await this.submit()
    await browser.saveScreenshot("test/pageobjects/loginSnap.png")
    
}
}
module.exports =new register();
