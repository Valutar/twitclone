const bcrypt = require ('bcryptjs')

const password = '123456'

const salt = bcrypt.genSaltSync()

const hash = bcrypt.hashSync(password, salt)
console.log({hash})