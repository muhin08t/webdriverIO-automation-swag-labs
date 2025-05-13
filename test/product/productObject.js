class ProductObject {
selectedProductBtn(index) {
    return $(`(//div[@class='inventory_item'])[${index}]//button`);
}
}

module.exports = new ProductObject();