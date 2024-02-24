const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/products',(req,res,next) => {
    console.log(req.body.product);
    res.sendFile(path.join(__dirname , ".." ,"views","shop.html" ))
})
router.get('/contact-us' , (req,res,next) => {
    res.sendFile(path.join(__dirname , ".." , "views" , "contact.html"));
   // res.redirect('/shop');
})
router.use((req,res,next)=>{
    res.send("Contact Form Submitted SuccessFully")
})
module.exports = router;