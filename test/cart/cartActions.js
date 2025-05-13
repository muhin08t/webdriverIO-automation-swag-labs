const cartObject = require('./cartObject.js');

class CartActions {
    async openCart () {
        await cartObject.btnCart.click();
    }

    async confirmCheckout () {
        await cartObject.btnCheckout.click();
    }

    async confirmAddress (fristName, lastName, postCode) {
        await cartObject.inputFristName.setValue(fristName);
        await cartObject.inputLastName.setValue(lastName);
        await cartObject.postCode.setValue(postCode);
    }

        async confirmContinue () {
        await cartObject.btnContinue.click();
    }

    async confirmFinish () {
    await cartObject.btnFinish.click();
    }

    async confirmBackHome () {
    await cartObject.btnBackHome.click();
    }
}

module.exports = new CartActions();