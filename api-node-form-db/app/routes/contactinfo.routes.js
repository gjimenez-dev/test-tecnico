module.exports = app => {
    const ContactInfo = require('../controllers/contactinfo.controllers.js');

    var router = require('express').Router();

    router.post('/', ContactInfo.create);

    app.use('/', router);

};