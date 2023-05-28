const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const typeorm = require('typeorm');
const User = require('../entity/User.js');

module.exports = async (req, res) => {
  try {
    const connection = typeorm.getConnection();
    const userRepository = connection.getRepository(User);

    const user = await userRepository.findOne({where: {nazwa_uzytkownika: req.body.nazwa_uzytkownika} });

    if (!user) {
      return res.status(400).send("User does not exist");
    }

    const validPassword = await bcrypt.compare(req.body.haslo, user.haslo);

    if (!validPassword) {
      return res.status(400).send("Incorrect password");
    }

    const token = jwt.sign(
      { id_uzytkownika: user.id_uzytkownika, nazwa_uzytkownika: user.nazwa_uzytkownika },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token: token });
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
};
