const User = require("../../models/User")

const userCreate = async () => {

  await User.create(
    {
      firstName: 'marlon',
      lastName: "cano",
      email: "marlon@gmail.com",
      password: 'marlon1234',
      phone: '+345643'
    }
  )

}

module.exports = userCreate