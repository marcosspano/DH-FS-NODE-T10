const { User } = require('../models');

/*
User.create ({
    name: 'Marcos Spano',
    email: 'marcosspano@administrador.com',
    password: '123456'
});
*/

User.findAll().then(
    users => {
        console.log(users[0].toJSON());
        // process.exit();
    }
    );

User.findByPk(2).then(
    user => console.log (user.toJSON())
)