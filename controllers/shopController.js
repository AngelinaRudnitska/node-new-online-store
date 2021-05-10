const Product = require("../models/product")



exports.getHomePage = (req, res, next) => {
    res.render('pages/index');
}
exports.getBlogPage = (req, res, next) => {
    res.render('pages/blog');
}
exports.getContactPage = (req, res, next) => {
    res.render('pages/contact');
}
exports.getSingleBlogPage = (req, res, next) => {
    res.render('pages/single-blog');
}
exports.getTrackingPage = (req, res, next) => {
    res.render('pages/tracking');
}
exports.getConfirmationPage = (req, res, next) => {
    res.render('pages/confirmation');
}
exports.getLoginPage = (req, res, next) => {
    res.render('pages/login');
}
exports.getCheckoutPage = (req, res, next) => {
    res.render('pages/product-checkout');
}
exports.getSingleProductPage = (req, res, next) => {
    res.render('pages/single-product');
}
exports.getRegisterPage = (req, res, next) => {
    res.render('pages/register');
}
exports.getShopCategoryPage = (req, res, next) => {
    Product.findAll()
        .then((products) => {
            res.render('pages/shop-category', {
                products: products,
            })
        })
        .catch(err => console.log(error));
}


exports.getShopingCartPage = (req, res, next) => {
    res.render('pages/shoping-cart');
}
exports.get404 = (req, res, next) => {
    res.status(404).render("pages/404.ejs")
}