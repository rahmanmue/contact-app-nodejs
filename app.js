const yargs = require('yargs')
const { simpanContact, listContact, detailContact, deleteContact } = require('./contact')


yargs.command({
    command : 'add',
    describe : 'Menambahkan Contact Baru',
    builder : {
        nama : {
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        },
        email:{
            describe: 'email lengkap',
            demandOption: false,
            type : 'string'
        },
        noHp:{
            describe: 'noHp lengkap',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        // const contact = {
        //     nama : argv.nama,
        //     email: argv.email,
        //     noHp: argv.noHp
        // }
        // console.log(contact)

        simpanContact(argv.nama, argv.email, argv.noHp)

    }
}).demandCommand()


yargs.command({
    command:'list',
    describe:'Menampilkan list kontak',
    handler(){
        listContact()
    }

})


yargs.command({
    command:'detail',
    describe:'Menampilkan detail sebuah kontak berdasarkan nama',
    builder: {
        nama:{
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        detailContact(argv.nama)
    }
})

yargs.command({
    command:'delete',
    describe:'Menghapus kontak berdasarkan nama',
    builder: {
        nama:{
            describe: 'nama lengkap',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        deleteContact(argv.nama)
    }
})

yargs.parse()




























