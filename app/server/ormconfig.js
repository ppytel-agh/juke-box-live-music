module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [
     "src/entity/**/*.js"
  ],
  synchronize: false,
  logging: false,
}
