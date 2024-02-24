const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js');
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname , 'public')));


app.use('/admin' , adminRoutes)
app.use('/shop' , shopRoutes)


app.use((req,res,next) => {
    res.send("404 Page Not Found")
})
app.listen(3000);