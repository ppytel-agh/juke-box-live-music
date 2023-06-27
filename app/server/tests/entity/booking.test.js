const typeorm = require('typeorm');
const Artist = require('../../src/entity/Artist');
const Concert = require('../../src/entity/Concert');
const User = require('../../src/entity/User');
const Booking = require('../../src/entity/Booking');

describe('Booking Entity', () => {
  beforeAll(async () => {
    await typeorm.createConnection('test');

    const connection = typeorm.getConnection('test');
    const artistRepository = connection.getRepository(Artist);
    const concertRepository = connection.getRepository(Concert);
    const userRepository = connection.getRepository(User);
    const bookingRepository = connection.getRepository(Booking);

    const testArtist = artistRepository.create({
      nazwa_artysty: 'John Lennon',
      opis_artysty: 'The Beatles'
    });

    await artistRepository.save(testArtist);
    const artist = await artistRepository.findOne({ where: { nazwa_artysty: 'John Lennon' }});

    const testUser = userRepository.create({
      nazwa_uzytkownika: 'johndoe',
      imie: 'John',
      nazwisko: 'Doe',
      email: 'john@example.com',
      haslo: 'passw0rd'
    });

    await userRepository.save(testUser);
    const user = await userRepository.findOne({ where: { email: 'john@example.com' } });

    const testConcert = await concertRepository.create({
      nazwa_koncertu: 'Wehikuł czasu',
      id_artysty: artist.id_artysty,
      data_koncertu: "2023-07-07",
      liczba_pozostalych_biletow: 100,
      cena_biletu: 50.0
    });

    await concertRepository.save(testConcert);
    const concert = await concertRepository.findOne({ where: { nazwa_koncertu: 'Wehikuł czasu' } });

    const testBooking = bookingRepository.create({
      id_uzytkownika: user.id_uzytkownika,
      id_koncertu: concert.id_koncertu,
      liczba_biletow: 1
    });

    await bookingRepository.save(testBooking);
  });

  afterAll(async () => {
    const connection = typeorm.getConnection('test');

    await connection.createQueryBuilder()
    .delete()
    .from(Booking)
    .execute()

    await connection.createQueryBuilder()
    .delete()
    .from(Concert)
    .execute();

    await connection.createQueryBuilder()
    .delete()
    .from(Artist)
    .execute();

    await connection.createQueryBuilder()
    .delete()
    .from(User)
    .execute()
  });

  it('should fetch booking from the database', async () => {
    const connection = typeorm.getConnection('test');
    const userRepository = connection.getRepository(User);
    const bookingRepository = connection.getRepository(Booking);

    const user = await userRepository.findOne({ where: { nazwa_uzytkownika: 'johndoe' } });
    const booking = await bookingRepository.findOne({ where: { id_uzytkownika: user.id_uzytkownika } });

    expect(booking).toBeDefined();
    expect(booking).not.toBeNull();
    expect(booking.id_koncertu).toBeDefined();
    expect(booking.liczba_biletow).toBe(1);
  });

  it('should not find a non-existing booking', async () => {
    const connection = typeorm.getConnection('test');
    const bookingRepository = connection.getRepository(Booking);

    const booking = await bookingRepository.findOne({ where: { id_koncertu: 321232113 } });

    expect(booking).toBeNull();
  });
});
