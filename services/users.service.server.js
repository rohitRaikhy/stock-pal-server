
const usersDao = require('../daos/users.dao.server')
const findAllUsers = () => usersDao.findAllUsers();
const findUserByID = (userId) => usersDao.findUserById(userId);
const createUser = (username, email, password, gender, role) => {
    usersDao.createUser(username, email, password, gender, role)}

    module.exports = {findAllUsers, findUserByID, createUser}
