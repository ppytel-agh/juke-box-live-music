const typeorm = require('typeorm');
const Reservation = require('../entity/Booking.js');
const User = require('../entity/User.js');
const Concert = require('../entity/Concert.js');

module.exports = async (req, res) => {
  try {
    const connection = typeorm.getConnection();
    const reservationRepository = connection.getRepository(Reservation);
    const userRepository = connection.getRepository(User);
    const concertRepository = connection.getRepository(Concert);

    const existingUser = await userRepository.findOne({ where: { id_uzytkownika: req.body.id_uzytkownika } });
    if (!existingUser) {
      return res.status(400).send("User with given ID does not exist");
    }

    const existingConcert = await concertRepository.findOne({ where: { id_koncertu: req.body.id_koncertu } });
    if (!existingConcert) {
      return res.status(400).send("Concert with given ID does not exist");
    }

    const reservation = reservationRepository.create(req.body);

    await reservationRepository.save(reservation);

    res.status(200).send("Reservation created successfully");
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
};
