const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");

// api calling to get data from backend
//get product api
router.get("/getproducts", async(req,res)=>{
    try{
        const productsdata = await Products.find();
        //console.log("console the data"+productsdata);
        res.status(201).json(productsdata);  
    }
    catch(error){
        console.log("error" +error.message);
    }
});

//get individual data;

router.get("/getproductsone/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        // console.log(id);

        const individuadata = await Products.findOne({id:id});

        console.log(individuadata)
        res.status(201).json(individuadata);
    } catch (error) {
        res.status(400).json(individuadata);
        console.log("error"+error.message);

    }
})

module.exports = router;