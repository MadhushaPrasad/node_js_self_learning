const yargs = require("yargs");
const db = require('./guestDB');

//set version
yargs.version("1.2.0");

//Add new Guest data
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
    handler(args) {
        db.addGuest(args);
    }
});

//update Guest data
yargs.command({
    command: 'update',
    describe: "update a guest",
    builder: {
        id: {
            describe: "Guest_ID",
            demandOption: true,
            type: "string"
        },
        name: {
            describe: 'Guest_Name',
            demandOption: true,
            type: 'string'
        }, address: {
            describe: "Address",
            type: "String"
        }
    },
    handler(args) {
        db.updateGuest(args);
    }
});

//delete Guest data
yargs.command({
    command: 'delete',
    describe: "delete a guest",
    builder: {
        id: {
            describe: "Guest_ID",
            demandOption: true,
            type: "string"
        }
    },
    handler(args) {
        db.deleteGuest(args.id);
    }
});

//Search the Guest data
yargs.command({
    command: 'search',
    describe: "search a guest",
    builder: {
        id: {
            describe: "Guest_ID",
            demandOption: true,
            type: "string"
        }
    },
    handler(args) {
        db.searchGest(args.id);
    }
});

//get All Guests data
yargs.command({
    command: 'getAll',
    describe: "getAll guests data",
    handler() {
        db.getAllGest();
    }
});

yargs.parse();

