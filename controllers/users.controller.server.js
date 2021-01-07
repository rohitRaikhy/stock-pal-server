
const usersService = require('../services/users.service.server')
module.exports = function (app) {
    app.get('/api/users', (req, res) =>
    usersService.findAllUsers()
        .then(allUsers => res.json(allUsers)))

    app.get('/api/users/:uid', (req, res) =>
    usersService.findUserByID(req.params['uid'])
        .then(user => res.json(user)))

    app.post('/api/users', (req, res) =>
    // usersService.createUser(req.body.user)
        usersService.createUser("test", "email", "password", "gender", "role")
        .then(actualUser => res.send(actualUser)))
}


