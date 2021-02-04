
exports.getBlogPage = (req, res, next) => {
    res.render("pages/blog")
}

exports.getCartPage = (req, res, next) => {
    res.render("pages/cart")
}

exports.getCategoryPage = (req, res, next) => {
    res.render("pages/category")
}

exports.getCheckoutPage = (req, res, next) => {
    res.render("pages/checkout")
}

exports.getConfirmationPage = (req, res, next) => {
    res.render("pages/confirmation")
}

exports.getContactPage = (req, res, next) => {
    res.render("pages/contact")
}

exports.getHomePage = (req, res, next) => {
    res.render("pages/index")
}

exports.getLoginPage = (req, res, next) => {
    res.render("pages/login")
}

exports.getRegisterPage = (req, res, next) => {
    res.render("pages/register")
}

exports.getSingleBlogPage = (req, res, next) => {
    res.render("pages/single-blog")
}

exports.getSingleProductPage = (req, res, next) => {
    res.render("pages/single-product")
}

exports.getTrackingOrderPage = (req, res, next) => {
    res.render("pages/tracking-order")
}

exports.get404 = (req, res, next) => {
    res.status(404).render("pages/404.ejs")
}