// const fs = require('fs')

// menuliskan string ke file (synchrounous)

// try{
//     fs.writeFileSync('data/test.txt','Hello World Synch')
// }catch(e){
//     console.log(e)
// }

// menuliskan string ke file (asynchrounous)

// fs.writeFile('data/test.txt','Hello world async', (e)=>{
//     if(e) throw e;
//     console.log('suceess')
// })

// membaca file (sycn)

// const data = fs.readFileSync('test.txt','utf-8')
// console.log(data)

// membaca file (async)

// fs.readFile('data/test.txt', 'utf-8', (e, data)=>{
//     if(e) throw e;
//     console.log(data)
// })


// rl.question('Masukan Nama: ', (nama) => {
//     rl.question('Masukan No Hp: ', (noHp) => {
//         const contact = { nama : nama, noHp : noHp}
//         const file = fs.readFileSync('data/contact.json', 'utf-8');
//         const contacts = JSON.parse(file)
//         contacts.push(contact)

//         fs.writeFileSync('data/contact.json', JSON.stringify(contacts))
//         console.log('Thank you')

//         rl.close();
//     })

// });

// const {tulisPertanyaan, simpanContact} = require('./contact')

// const main = async () =>{
//     const nama = await tulisPertanyaan('Masukan Nama : ')
//     const email = await tulisPertanyaan('Masukan Email : ')
//     const noHp = await tulisPertanyaan('Masukan noHp : ')

//     simpanContact(nama,email,noHp)
// }

// main()