const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "User",
    tableName: "Uzytkownicy",
    columns: {
        id_uzytkownika: {
            primary: true,
            type: "int",
            generated: true
        },
        nazwa_uzytkownika: {
            type: "varchar",
            length: 255
        },
        imie: {
            type: "varchar",
            length: 255
        },
        nazwisko: {
            type: "varchar",
            length: 255
        },
        email: {
            type: "varchar",
            length: 255
        },
        haslo: {
            type: "varchar",
            length: 255
        }
    }
});
