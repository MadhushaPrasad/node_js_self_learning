const yargs = require("yargs");
const db = require('./guestDB');

yargs.version("1.2.0");

yargs.command({
    command: 'add',
    describe: "Add a guest",
    handle: function () {
        db.addGuest();
    }
});

yargs.command({
    command: 'update',
    describe: "update a guest",
    handle: function () {
        db.updateGuest();
    }
});

console.log(yargs.argv);

