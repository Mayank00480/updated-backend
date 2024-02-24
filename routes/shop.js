const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/contact')

router.get('/products',(req,res,next) => {
    console.log(req.body.product);
    res.sendFile(path.join(__dirname , ".." ,"views","shop.html" ))
})
router.get('/contact-us' , controller.contactController)
router.use('/success',controller.SuccessController)
module.exports = router;