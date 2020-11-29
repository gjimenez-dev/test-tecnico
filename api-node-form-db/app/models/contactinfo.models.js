module.exports = (sequelize, Sequelize) => {
    const ContactInfo = sequelize.define('contactinfo', {
    nameContact: { type: Sequelize.STRING },
    companyContact: { type: Sequelize.STRING },
    emailContact: { type: Sequelize.STRING },
    phoneContact: { type: Sequelize.STRING },
    categoryContact: { type: Sequelize.STRING },
    messContact: { type: Sequelize.STRING }
    });

    return ContactInfo;

};
