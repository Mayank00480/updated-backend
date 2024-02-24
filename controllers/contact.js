exports.contactController = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  }

  exports.SuccessController = (req,res,next)=>{
    res.send("Contact Form Submitted SuccessFully")
}