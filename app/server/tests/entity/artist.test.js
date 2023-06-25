const typeorm = require('typeorm');
const Artist = require('../../src/entity/Artist');

describe('Artist Entity', () => {
  beforeAll(async () => {
    await typeorm.createConnection('test');

    const connection = typeorm.getConnection('test');
    const artistRepository = connection.getRepository(Artist);

    const testArtist = artistRepository.create({
      nazwa_artysty: 'John Lennon',
      opis_artysty: 'The Beatles'
    });

    await artistRepository.save(testArtist);
  });

  afterAll(async () => {
    const connection = typeorm.getConnection('test');

    await connection.createQueryBuilder()
    .delete()
    .from(Artist)
    .execute()
  });

  it('should fetch artist from the database', async () => {
    const connection = typeorm.getConnection('test');
    const artistRepository = connection.getRepository(Artist);

    const artist = await artistRepository.findOne({ where: { nazwa_artysty: 'John Lennon' } });

    expect(artist).toBeDefined();
    expect(artist).not.toBeNull();
    expect(artist.opis_artysty).toBe('The Beatles');
    expect(artist.nazwa_artysty).toBe('John Lennon');
  });

  it('should not find a non-existing artist', async () => {
    const connection = typeorm.getConnection('test');
    const artistRepository = connection.getRepository(Artist);

    const artist = await artistRepository.findOne({ where: { nazwa_artysty: 'nie istniejąca nazwa artysty' } });

    expect(artist).toBeNull();
  });
});
