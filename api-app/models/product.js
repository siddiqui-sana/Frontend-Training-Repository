//Define the schema of data(i.e. the structure of our data)
const { Schema, SchemaTypes, model } = require("mongoose");

const ProductSchema = new Schema({
  productId: {
    type: SchemaTypes.Number,
    required: true,
    unique: true,
  },
  productName: {
    type: SchemaTypes.String,
    required: true,
  },
  productPrice: {
    type: SchemaTypes.String,
    required: true,
  },
  productImage: {
    type: SchemaTypes.String,
    required: true,
  },
  productStock: {
    type: SchemaTypes.Number,
    default: 0,
  },
});
//products
const product = model("product", ProductSchema);
module.exports = product;