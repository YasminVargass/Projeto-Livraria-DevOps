const bookstore = [
    {
      id: 1,
      title: "It, a Coisa",
      author: "Stephen King",
      bookGenre: "Terror",
      year: 1986,
      price: 84.99,
      quantityPhysicalBook: 540,
    },
    {
      id: 2,
      title: "Sandman",
      author: "Neil Gaiman",
      bookGenre: "Quadrinho",
      year: 1989,
      price: 214.5,
      quantityPhysicalBook: 40,
    },
    {
      id: 3,
      title: "Jogos Vorazes",
      author: "Suzanne Collins",
      bookGenre: "Ficção Ciêntifica",
      year: 2008,
      price: 41.70, 
      quantityPhysicalBook: 12,
    },
  ];
  

  const fileSistem = require('fs');
  const dataJSON = JSON.stringify(bookstore);
  const nameJSONFile = 'dataBookstore.json';
  
  fileSistem.writeFile(nameJSONFile, dataJSON,(err)=>{
    if (err) {
      console.error("Ocorreu um erro na gravação", err);
      return;
    }
  })
  

  module.exports = {bookstore};