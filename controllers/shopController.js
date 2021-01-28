exports.getHomePage = (req, res, next) => {
    res.render('pages/index');
}

exports.getAboutPage = (req, res, next) => {
    res.render('pages/about');
}
exports.getVacanciesPage = (req, res, next) => {
    res.render('pages/vacancies');
}
exports.getCarieerPage = (req, res, next) => {
    res.send('<h1>Carieer</h1>');
}
exports.getContactPage = (req, res, next) => {
    res.send('<h1>Contact</h1>');
}
exports.getResoursesPage = (req, res, next) => {
    res.send('<h1>Resourses</h1>');
}
