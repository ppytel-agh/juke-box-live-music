const typeorm = require('typeorm');
const jwt = require('jsonwebtoken');

const Reservation = require('../entity/Booking.js');
const User = require('../entity/User.js');
const Concert = require('../entity/Concert.js');
const Artist = require('../entity/Artist.js');

module.exports = async (req, res) => {
    try {
        // Pobierz token JWT z nagłówka Authorization
        const authHeader = req.headers.authorization;

        if (!authHeader) {
        return res.status(403).send('No authorization header provided');
        }

        const token = authHeader;

        // Zdekoduj token JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const userId = decoded.id_uzytkownika;

        const connection = typeorm.getConnection();
        const reservationRepository = connection.getRepository(Reservation);
        const userReservations = await reservationRepository.find({ 
            where: { id_uzytkownika: decoded.id_uzytkownika },
            relations: ["koncert", "koncert.artysta"]
        });

        const formattedReservations = userReservations.map((reservation) => ({
            id_rezerwacji: reservation.id_rezerwacji,
            liczba_biletow: reservation.liczba_biletow,
            koszt_calkowity: reservation.koszt_calkowity,
            koncert: {
                id_koncertu: reservation.koncert.id_koncertu,
                nazwa_koncertu: reservation.koncert.nazwa_koncertu,
                data_koncertu: reservation.koncert.data_koncertu,
                artysta: {
                    id_artysty: reservation.koncert.artysta.id_artysty,
                    nazwa_artysty: reservation.koncert.artysta.nazwa_artysty,
                    opis_artysty: reservation.koncert.artysta.opis_artysty
                },
            },
        }));

        res.status(200).json(formattedReservations);

    } catch (error) {
        console.log('Error occurred:', error);
        res.status(500).send(`An error occurred: ${error.message}`);
    }
    
};