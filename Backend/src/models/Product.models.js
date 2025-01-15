const mongoose = require('mongoose');       
const SchemaObject = 
{
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 1 },
  discountedPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  category: { type: String, required: true, enum: ['male', 'female', 'kids'] },
  images: [
    {
      type: String,
      required: true,
      default: 'https://img.freepik.com/premium-photo/still-life-wireless-cyberpunk-headphones_23-2151072219.jpg?w=360',
    },
  ],
  userEmail: { type: String },
};
const productSchema = new mongoose.Schema(SchemaObject, { versionKey: false });
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;