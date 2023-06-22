const typeorm = require('typeorm');

const Concert = require('../entity/Concert.js');

module.exports = async (req, res) => {
  try {
    const connection = typeorm.getConnection();
    const concertRepository = connection.getRepository(Concert);

    const allConcerts = await concertRepository.find();

    res.status(200).json(allConcerts);
  } catch (error) {
    console.log('Error occurred:', error);
    res.status(500).send(`An error occurred: ${error.message}`);
  }
}