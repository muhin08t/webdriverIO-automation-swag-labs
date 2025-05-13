const { browser } = require('@wdio/globals');
const loginActions = require('../test/login/loginActions');
const lockUserName = 'locked_out_user';
const password = 'secret_sauce';

describe('Swag labs application automation testing', () => {
    it('Fails to login with locked user credentials', async () => {
        await loginActions.login(lockUserName, password);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.pause(1000); 
    });

});
 