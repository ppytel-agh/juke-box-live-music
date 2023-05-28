const typeorm = require('typeorm');
const Artist = require('../entity/Artist.js');

module.exports = async (req, res) => {
  try {
    const connection = typeorm.getConnection();
    const artistRepository = connection.getRepository(Artist);

    const existingArtist = await artistRepository.findOne({ where: { nazwa_artysty: req.body.nazwa_artysty } });
    if (existingArtist) {
      return res.status(400).send("Artist already exist");
    }

    const artist = artistRepository.create(req.body);

    await artistRepository.save(artist);

    res.status(200).send("Artist created successfully");
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
};
