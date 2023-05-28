const typeorm = require('typeorm');
const Concert = require('../entity/Concert.js');
const Artist = require('../entity/Artist.js');

module.exports = async (req, res) => {
  try {
    const connection = typeorm.getConnection();
    const concertRepository = connection.getRepository(Concert);
    const artistRepository = connection.getRepository(Artist);

    const existingArtist = await artistRepository.findOne({ where: { id_artysty: req.body.id_artysty } });
    if (!existingArtist) {
      return res.status(400).send("Artist with given ID does not exist");
    }

    const concert = concertRepository.create(req.body);

    await concertRepository.save(concert);

    res.status(200).send("Concert created successfully");
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
};
