const db = require('./guestDB');

const command = process.argv;

if (command[2] === "add") {
    db.addGuest();
} else if (command[2] === "update") {
    db.updateGuest();
}
