// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });
const fs = require('node:fs');
const chalk = require('chalk')
const validator = require('validator')


// cek folder
const dirPath = './data'
const dataPath = `${dirPath}/contact.json`

if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]', 'utf-8')
}

// input sudah di cmd

// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject)=>{
//         rl.question(pertanyaan, (x)=>{
//             resolve(x)
//         })
//     })
// } 


const loadContact = () => {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file)
    return contacts
}

const simpanContact = (nama,email,noHp) => {
    const contact = {nama, email, noHp}
    const contacts = loadContact();


    const duplikat = contacts.find((contact)=> contact.nama === nama)
    if(duplikat){
        console.log(
            chalk.red.inverse.bold('Nama sudah Ada')
        )
        return false
    }

    if(email){
        if(!validator.isEmail(email)){
            console.log(
                chalk.red.inverse.bold('Format email salah')
            )
            return false
        }
    }

    if(!validator.isMobilePhone(noHp, 'id-ID')){
        console.log(
            chalk.red.inverse.bold('Format noHp salah')
        )
        return false
    }



    contacts.push(contact)

    fs.writeFileSync(dataPath, JSON.stringify(contacts))
    console.log(chalk.green.inverse.bold('Thank you'))
    // rl.close()
}

const listContact = () => {
    const contacts = loadContact()
    console.log(
        chalk.cyan.inverse.bold('Daftar Kontak')
    )
    contacts.forEach((contact, i)=>{
        console.log(`${i+1}. ${contact.nama} - ${contact.noHp}`)
    })

}

const detailContact = (nama) => {
    const contacts = loadContact();

    const result = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if(!result){
        console.log(
            chalk.red.inverse.bold(`${nama} tidak ditemukan`)
        )
        return false
    }
    

    console.log(
        chalk.cyan.inverse.bold(`${result.nama} `)
    )
    console.log(result.noHp)

    if(result.email){
        console.log(result.email)
    }
}


const deleteContact = (nama) =>{
    const contacts = loadContact();
    const newContacts = contacts.filter((contact)=> contact.nama !== nama)

    if(contacts.length === newContacts.length){
        console.log(
            chalk.red.inverse.bold(`${nama} tidak ditemukan`)
        )
        return false
    }

    fs.writeFileSync(dataPath, JSON.stringify(newContacts))
    console.log(chalk.green.inverse.bold(`${nama} telah dihapus`))

}

module.exports = {
    // tulisPertanyaan,
    simpanContact,
    listContact,
    detailContact, 
    deleteContact
}