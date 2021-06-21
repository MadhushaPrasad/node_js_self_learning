const yargs = require("yargs");
const db = require('./guestDB');

yargs.version("1.2.0");

yargs.command({
    command: 'add',
    describe: "Add a guest",
    builder: {
        name: {
            describe: "Name",
            demandOption: true,
            type: "String"
        },
        address: {
            describe: "Address",
            type: "String"
        }
    },
    handler: function () {
        db.addGuest();
        console.log("Name is =", yargs.argv.name);
        console.log("Address is =", yargs.argv.address);
    }
});

yargs.command({
    command: 'update',
    describe: "update a guest",
    handler: function () {
        db.updateGuest();
    }
});

yargs.parse();

