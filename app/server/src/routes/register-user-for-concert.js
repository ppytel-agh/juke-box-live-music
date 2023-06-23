const typeorm = require('typeorm');
const jwt = require('jsonwebtoken');

const Reservation = require('../entity/Booking.js');
const User = require('../entity/User.js');
const Concert = require('../entity/Concert.js');
const Artist = require('../entity/Artist.js');

module.exports = async (req, res) => {
  try {
    const concertId = req.body.id_koncertu;
    const ticketsCount = req.body.liczba_biletow;  
    const totalCost = req.body.koszt_calkowity;

    // Pobierz token JWT z nagłówka Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
    return res.status(403).send('No authorization header provided');
    }

    const token = authHeader

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id_uzytkownika;

    const connection = typeorm.getConnection();
    const bookingRepository = connection.getRepository(Reservation);

    // tworzenie nowej rezerwacji
    let booking = bookingRepository.create();
    booking.id_uzytkownika = userId;
    booking.id_koncertu = concertId;
    booking.liczba_biletow = ticketsCount;
    booking.koszt_calkowity = totalCost;

    // zapis nowej rezerwacji do bazy danych
    await bookingRepository.save(booking);

    res.status(200).send("Booking created successfully");
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }    
}