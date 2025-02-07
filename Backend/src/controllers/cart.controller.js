const mongoose= require("mongoose");
const UserModel= require("../models/user.model.js")
const CartModel=require("../models/cart.model.js")
async function AddToCartController(req,res){
 const {productId, quantity} = req.body;
 const userId = req.UserId;
 try{
    if(!mongoose.Types.ObjectId.isValid(productId)){
        return res.send(400).send({message: "Send valid productId"})
    }
    if(!mongoose.Types.ObjectId.isValid(userId))
    {
        return res.send(400).send({message: "Send valid userId"});
    }
    const checkPresentUser= await UserModel.findOne({ _id: userId});

    if(!checkPresentUser)
    {
        return res.status(401).send({message : "User not found"});
    }
    const checkIfProductPresent = await CartModel.findOne({ productId :productId});
    if(checkIfProductPresent){
        return res.status(400).send({message: "Product already present", success:false});
    }
    await CartModel.create({
    productId,
    quantity,
    userId,
    });

    return res.status(201).send({message: "Product is successfully added to cart", success: true});
 }
 catch(err){
    return res.status(500).send({message: err.message, success: false});
 }
}

async function GetProductsForUser(req,res){
    const userId= req.UserId;
    try{
        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(401).send({message: "Un-Authorized"})
        }
        const checkUserPresent = await UserModel.findOne({ _id : userId});
        if(!checkUserPresent){
            return res.status(401).send({message: "Un-Auhorized"});
    }
    const data= await CartModel.find({userId: checkUserPresent._id}).populate('productId');
    return res.status(200).send({message: 'Data is successfully fetched',success: true,cartData: data,
      });
    } catch (er) {
      return res.status(500).send({ message: er.message, success: false });
    }
  }
  
module.exports = { AddToCartController, GetProductsForUser };