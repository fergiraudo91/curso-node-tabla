const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base con la que se creara las tablas de multiplicar'
        })
        .option('l', {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: 'Lista la tabla de multiplicar'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            demandOption: true,
            describe: 'Hasta cuantos numeros tendra la tabla de multiplicar'
        })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'La base tiene que ser un número!';
            }
            if(isNaN(argv.h)){
                throw 'El hasta tiene que ser un numero!';
            }
            return true;
        })
        .argv;


module.exports = argv;