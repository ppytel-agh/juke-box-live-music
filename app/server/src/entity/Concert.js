const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Concert",
    tableName: "Koncerty",
    columns: {
        id_koncertu: {
            primary: true,
            type: "int",
            generated: true
        },
        nazwa_koncertu: {
            type: "varchar",
            length: 255
        },
        data_koncertu: {
            type: "date"
        },
        id_artysty: {
            type: "int"
        }
    },
    relations: {
        artysta: {
            target: "Artysci",
            type: "many-to-one",
            joinColumn: { name: "id_artysty" },
            cascade: true,
            eager: true
        }
    }
});
