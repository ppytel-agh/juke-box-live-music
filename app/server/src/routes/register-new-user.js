const bcrypt = require('bcrypt');
const typeorm = require('typeorm');
const User = require('../entity/User.js');

module.exports = async (req, res) => {
  try {
    const connection = typeorm.getConnection();
    const userRepository = connection.getRepository(User);

    const existingUser = await userRepository.findOne({ where: [{ nazwa_uzytkownika: req.body.nazwa_uzytkownika }, { email: req.body.email }] });
    if (existingUser) {
      return res.status(400).send("Username or e-mail already in use");
    }

    const passwordRegex = /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}/;
    if (!passwordRegex.test(req.body.haslo)) {
      return res.status(400).send("The password must contain a number, a capital letter and a special character");
    }

    const hashedPassword = await bcrypt.hash(req.body.haslo, 10);

    const user = userRepository.create(req.body);
    user.haslo = hashedPassword;

    await userRepository.save(user);

    res.status(200).send("User created successfully");
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
};
