const typeorm = require('typeorm');
const User = require('../../src/entity/User');

describe('User Entity', () => {
  beforeAll(async () => {
    await typeorm.createConnection('test');

    const connection = typeorm.getConnection('test');
    const userRepository = connection.getRepository(User);

    const testUser = userRepository.create({
      nazwa_uzytkownika: 'johndoe',
      imie: 'John',
      nazwisko: 'Doe',
      email: 'john@example.com',
      haslo: 'passw0rd'
    });

    await userRepository.save(testUser);
  });

  afterAll(async () => {
    const connection = typeorm.getConnection('test');

    await connection.createQueryBuilder()
    .delete()
    .from(User)
    .execute()
  });

  it('should fetch user from the database', async () => {
    const connection = typeorm.getConnection('test');
    const userRepository = connection.getRepository(User);

    const user = await userRepository.findOne({ where: { email: 'john@example.com' } });

    expect(user).toBeDefined();
    expect(user).not.toBeNull();
    expect(user.imie).toBe('John');
    expect(user.nazwisko).toBe('Doe');
  });

  it('should not find a non-existing user', async () => {
    const connection = typeorm.getConnection('test');
    const userRepository = connection.getRepository(User);

    const user = await userRepository.findOne({ where: { email: 'nonexisting@example.com' } });

    expect(user).toBeNull();
  });
});
