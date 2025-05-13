const { browser } = require('@wdio/globals');
const loginActions = require('../test/login/loginActions');
const prductActions = require('../test/product/productActions');
const cartActions = require('../test/cart/cartActions');
const lockUserName = 'locked_out_user';
const standardUserName = 'standard_user';
const password = 'secret_sauce';


describe('Swag labs application automation testing', () => {

    it('Successfully login with valid standard user credentials', async () => {
        await loginActions.login(standardUserName, password);
        // await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.pause(2000); 
    });

     it('Reset app state', async () => {
        await loginActions.openMenu();
        await loginActions.resetAppState();
        await loginActions.closeMenu();
        await browser.pause(2000); 
    });

     it('Add product to cart', async () => {
        await prductActions.selectedProductBtn(1).click();
        await browser.pause(2000); 
        await prductActions.selectedProductBtn(2).click();
        await browser.pause(2000);
        await prductActions.selectedProductBtn(3).click();
        await browser.pause(2000); 
    });

    it('Successfully confirm order', async () => {
        await cartActions.openCart();
        await browser.pause(2000);
        await cartActions.confirmCheckout();
        await browser.pause(2000);
        await cartActions.confirmAddress("Johon","Doe","12345");
        await browser.pause(2000);
        await cartActions.confirmContinue();
        await browser.pause(2000);
        await cartActions.confirmFinish();
        await browser.pause(2000);
        await cartActions.confirmBackHome();
        await browser.pause(2000); 
    });

       it('Successfully logout', async () => {
        await loginActions.openMenu();
        await loginActions.resetAppState();
        await loginActions.handleLogout();
        await browser.pause(2000); 
    });

});
