const multer = require("multer");
const cloudinary = require("../utils/cloudinary.js");
const fs = require("fs");
const ProductModel = require("../models/Product.models.js");
const upload = multer({ dest: "uploads/" });
const createProductController = async (req, res) => {
  const {
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  } = req.body;
  console.log()

  try {
    const arrayImage = req.files.map(async (singleFile, index) => {
      return cloudinary.uploader
        .upload(singleFile.path, {
          folder: "uploads",
        })
        .then((result) => {
          fs.unlinkSync(singleFile.path);
          return result.url;
        });
    });

    const dataImages = await Promise.all(arrayImage);
    const StoreProductDetails = await ProductModel.create({
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
      images: dataImages,
    });

    return res.status(201).send({
      message: "Image Successfully Uploaded",
      sucess: true,
      dataImages,
      StoreProductDetails,
    });
  } catch (er) {
    if (er instanceof multer.MulterError) {
      return res.status(400).send({
        message: "Multer error : Please send image less than 5 ",
        success: false,
      });
    }

    return res.status(500).send({ message: er.message, success: false });
  }
};

const getProductDataController = async (req, res) => {
  try {
    const data = await ProductModel.find();
    return res
      .status(200)
      .send({ data, message: "Data fetched successfully", success: true });
  } catch (err) {
    return res.status(500).send({ message: err.message, success: false });
  }
};


const updateProduct=async(req,res)=>{
  const{
    title,
    description,
    rating,
    discountedPrice,
    originalPrice,
    quantity,
    category,
  }=req.body;
  const {id}=req.params;
  try{
    const checkIfProductExist= await ProductModel.findOne({_id:id})
    if(!checkIfProductExist)
      return res.status(404).send({messag: "Product not found"
        })
    const arrayImage=req.files.map((singleFile,index)=>{
      return cloudinary.uploader
        .upload(singleFile.path,{
          folder:"uploads"
        })
        .then((result)=>{
          fs.unlinkedSync(singleFile.path);
          return result.url;
        })
      })
      const ImageData= await Promise.all(arrayImage);
      const findAndUpdate= await ProductModel.findByIdAndUpdate(
      { _id:id},
      {
        title,
          description,
          rating,
          discountedPrice,
          originalPrice,
          quantity,
          category,
          images:ImageData
      },
      {
        new:true,
      })
      return res.status(201).send({message:"Updated successfully", success: true, UpdatedResult: findAndUpdate,})
    }
  catch(er){
    res.status(500).send({messag:er.message, successful: false})
  }
};
const getSingleProductDocument=async(req,res)=>{
  const {id}= req.params;
  try{
    const data =await ProductModel.findOne({_id:id});
    console.log(data);
    if(!data){
      return res.status(404).send({Message : "Product not found"})
    }
    return res.status(200).send({message: "Product successfully fetched", data, success: true})
  }
  catch(er){
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log('id', id);
  try {
    const data = await ProductModel.findOne({ _id: id });
    console.log(data);
    if (!data) {
      return res.status(404).send({ Message: 'Product Not Found' });
    }

    await ProductModel.findByIdAndDelete({ _id: id });
    const newData = await ProductModel.find();
    return res.status(200).send({
      message: 'Product Successfully fetched',
      data: newData,
      success: true,
    });
  } catch (er) {
    return res.status(500).send({ message: er.message, success: false });
  }
};

module.exports = { createProductController, getProductDataController,updateProduct,getSingleProductDocument, deleteProduct}
