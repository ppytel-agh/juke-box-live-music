const typeorm = require('typeorm');
const Artist = require('../../src/entity/Artist');
const Concert = require('../../src/entity/Concert');

describe('Concert Entity', () => {
  beforeAll(async () => {
    await typeorm.createConnection('test');

    const connection = typeorm.getConnection('test');
    const artistRepository = connection.getRepository(Artist);
    const concertRepository = connection.getRepository(Concert);

    const testArtist = artistRepository.create({
      nazwa_artysty: 'John Lennon',
      opis_artysty: 'The Beatles'
    });

    await artistRepository.save(testArtist);

    const artist = await artistRepository.findOne({ where: { nazwa_artysty: 'John Lennon' }});

    const testConcert = concertRepository.create({
      nazwa_koncertu: 'Wehikuł czasu',
      id_artysty: artist.id_artysty,
      data_koncertu: "2023-07-07"
    });

    await concertRepository.save(testConcert);
  });

  afterAll(async () => {
    const connection = typeorm.getConnection('test');

    await connection.createQueryBuilder()
    .delete()
    .from(Concert)
    .execute();

    await connection.createQueryBuilder()
    .delete()
    .from(Artist)
    .execute();
  });

  it('should fetch concert from the database', async () => {
    const connection = typeorm.getConnection('test');
    const artistRepository = connection.getRepository(Artist);
    const concertRepository = connection.getRepository(Concert);

    const concert = await concertRepository.findOne({ where: { nazwa_koncertu: 'Wehikuł czasu' } });
    const artist = await artistRepository.findOne({ where: { nazwa_artysty: 'John Lennon' }});

    expect(concert).toBeDefined();
    expect(concert).not.toBeNull();
    expect(concert.nazwa_koncertu).toBe('Wehikuł czasu');
    expect(concert.data_koncertu).toBe('2023-07-07');
    expect(concert.id_artysty).toBe(artist.id_artysty)
  });

  it('should not find a non-existing concert', async () => {
    const connection = typeorm.getConnection('test');
    const concertRepository = connection.getRepository(Concert);

    const concert = await concertRepository.findOne({ where: { nazwa_koncertu: 'Nie istniejąca nazwa' } });

    expect(concert).toBeNull();
  });
});
