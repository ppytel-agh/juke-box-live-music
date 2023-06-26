const typeorm = require('typeorm');

const Reservation = require('../entity/Booking.js');
const User = require('../entity/User.js');
const Concert = require('../entity/Concert.js');
const Artist = require('../entity/Artist.js');

module.exports = async (req, res) => {
  try {
    const concertId = req.params.id;  // pobranie id koncertu z parametrów ścieżki

    const connection = typeorm.getConnection();
    const concertRepository = connection.getRepository(Concert);

    // wyszukanie koncertu na podstawie id
    const concert = await concertRepository.findOne({ 
        where: { id_koncertu: concertId },
        relations: ["artysta"]
    });

    // jeżeli nie znaleziono koncertu, zwracamy błąd
    if (!concert) {
      return res.status(404).send("Concert not found");
    }

    // jeżeli koncert został znaleziony, zwracamy jego dane
    res.status(200).json({
        id_koncertu: concert.id_koncertu,
        nazwa_koncertu: concert.nazwa_koncertu,
        data_koncertu: concert.data_koncertu,
        liczba_pozostalych_biletow: concert.liczba_pozostalych_biletow,
        cena_biletu: concert.cena_biletu,
        artysta: {
            id_artysty: concert.artysta.id_artysty,
            nazwa_artysty: concert.artysta.nazwa_artysty,
            opis_artysty: concert.artysta.opis_artysty
        }
    });

  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }    
}