class CartObect {
    get btnCheckout () {
        return $('#checkout')
    }

      get btnCart () {
        return $('.shopping_cart_link')
    }

      get inputFristName () {
        return $('#first-name')
    }

      get inputLastName () {
        return $('#last-name')
    }

      get postCode () {
        return $('#postal-code')
    }

      get btnContinue () {
        return $('#continue')
    }

        get btnFinish () {
        return $('#finish')
    }

       get btnBackHome () {
        return $('#back-to-products')
    }

}

module.exports = new CartObect();