const db = require('../models');
const Contactdb = db.ContactInfo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (res.body === undefined) {
        res.status(400).send({ message: 'Error 400: Contenido vacio!' });
        return;
    }

    const ContactData = {
        nameContact: req.body.nameContact,
        companyContact: req.body.companyContact,
        emailContact: req.body.emailContact,
        phoneContact: req.body.phoneContact,
        categoryContact: req.body.categoryContact,
        messContact: req.body.messContact
    };

    Contactdb.create(ContactData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'ERROR 500 en conexión con la BD.'
      });
    });
};

// Retrieve all from the database
exports.findAll = (req, res) => {};

// Find with an id
exports.findOne = (req, res) => {};

// Update by the id in the request
exports.update = (req, res) => {};

// Delete with the specified id in the request
exports.delete = (req, res) => {};

// Delete all from the database.
exports.deleteAll = (req, res) => {};

// Query specified
exports.query = (req, res, sql) => {};