const costumer = {
    id: 1,
    name: "Yasmin Vargas",
    mail: "yasmin@mail.com",
    phone: 21988889999,
    adress: {
      street: "Rua A",
      number: "10",
      neighborhood: "Copacabana",
      zip: 11222333,
      city: "Rio de Janeiro",
      state: "RJ",
    },
  };

const fileSistem = require('fs');
const dataJSON = JSON.stringify(costumer);
const nameJSONFile = 'dataCostumer.json';

fileSistem.writeFile(nameJSONFile, dataJSON,(err)=>{
  if (err) {
    console.error("Ocorreu um erro na gravação", err);
    return;
  }
})


  module.exports = {costumer};