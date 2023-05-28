const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Artist",
    tableName: "Artysci",
    columns: {
        id_artysty: {
            primary: true,
            type: "int",
            generated: true
        },
        nazwa_artysty: {
            type: "varchar",
            length: 255
        },
        opis_artysty: {
            type: "text"
        }
    }
});
