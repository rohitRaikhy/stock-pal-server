const usersModel = require("../models/Users/users.model.server")
const findAllUsers = () => usersModel.find()
const findUserById = (userID) => usersModel.findById(userID);
const createUser = (userName, emailAddress, pass, gend, roleOf) => {
   // const user = {username: "test", email: "email", password: "pass", gender: "gender", role: "ADMIN"}
   const user = {username: userName, email: emailAddress, password: pass, gender: gend, role: roleOf}
   return usersModel.create(user)
}

module.exports = {findAllUsers, findUserById, createUser}
