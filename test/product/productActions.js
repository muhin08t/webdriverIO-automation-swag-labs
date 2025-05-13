const productObject = require('./productObject');

class ProductActions {
    selectedProductBtn(index) {
        return productObject.selectedProductBtn(index);
    }
}

module.exports = new ProductActions();