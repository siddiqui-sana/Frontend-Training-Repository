const product = require("../models/product");

const addProduct = (data) =>{
    return product.create(data);
};
const updateProduct = (id,data) => {
    return product.findOneAndUpdate({productId: id}, data, {upset: true});
};
const getAllProducts = ()=>{
    return product.find({}); //Empty parameters mean return everything
};
const getProductById = (id) => {
    return product.findOne({productId: id});
};
const removeProduct = (id) => {
    return product.findOneAndRemove({productId: id});
};

module.exports = {
    addProduct,
    removeProduct,
    updateProduct,
    getAllProducts,
    getProductById,
};