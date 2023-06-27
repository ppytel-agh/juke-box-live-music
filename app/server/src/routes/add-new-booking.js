const typeorm = require('typeorm');
const jwt = require('jsonwebtoken');

const Reservation = require('../entity/Booking.js');
const Concert = require('../entity/Concert.js');

module.exports = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const connection = typeorm.getConnection();
    const reservationRepository = connection.getRepository(Reservation);
    const concertRepository = connection.getRepository(Concert);

    const existingConcert = await concertRepository.findOne({ where: { id_koncertu: req.body.id_koncertu } });
    if (!existingConcert) {
      return res.status(400).send("Concert with given ID does not exist");
    }

    if (req.body.liczba_biletow > existingConcert.liczba_pozostalych_biletow) {
      return res.status(400).send("Not enough tickets available");
    }

    const reservation = reservationRepository.create({
      ...req.body,
      id_uzytkownika: decodedToken.id_uzytkownika
    });

    await reservationRepository.save(reservation);

    existingConcert.liczba_pozostalych_biletow -= req.body.liczba_biletow;

    await concertRepository.save(existingConcert);

    res.status(200).send("Reservation created successfully");
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
};
