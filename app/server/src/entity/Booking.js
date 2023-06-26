const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Booking",
    tableName: "Rezerwacje",
    columns: {
        id_rezerwacji: {
            primary: true,
            type: "int",
            generated: true
        },
        id_uzytkownika: {
            type: "int"
        },
        id_koncertu: {
            type: "int"
        },
        liczba_biletow: {
            type: "int"
        }
    },
    relations: {
        uzytkownik: {
            target: "User",
            type: "many-to-one",
            joinColumn: { name: "id_uzytkownika" },
            cascade: true,
            eager: true
        },
        koncert: {
            target: "Concert",
            type: "many-to-one",
            joinColumn: { name: "id_koncertu" },
            cascade: true,
            eager: true
        }
    }
});
