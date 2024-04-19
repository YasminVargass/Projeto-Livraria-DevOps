const { bookstore } = require("./bookstore");
const { costumer } = require("./costumer");

let toSendBooks = new Date();
toSendBooks.setDate(toSendBooks.getDate() + 7);
let toSendBooksFormated = toSendBooks.toLocaleDateString( { day: "2-digit", month: "2-digit", year: "numeric" });

const typeBookPhysical = "físico";


function findBook(title, type) {
    try {
      let book;

      switch (title) {
        case "It, a Coisa":
        case "Sandman":
        case "Jogos Vorazes":
          book = bookstore.find((book) => book.title === title);
          break;
        default:
          throw new Error(`${title} não está disponível no momento, deseja receber um e-mail de aviso quando ele estiver disponível novamente?`);
      }

      if (book) {
        if (type === typeBookPhysical && book.quantityPhysicalBook === 0) {
          throw new Error(`No momento só temos o livro ${book.title} em formato Ebook, deseja continuar a compra?`);
        } else {
            console.log("Você será redirecionado à área de pagamento.");
         return true;
        }
      } else {
        throw new Error("Livro não encontrado.");
      }
    } catch (error) {
      console.log(`Ocorreu um erro: ${error.message}`);
      return false;
    }
  }
  
function processOrder(costumer, title, type, date) {
    try{
      if (type === typeBookPhysical) {
        console.log("Por favor, confirme os dados da entrega: ");
        console.log(
          `Nome: ${costumer.name}, os dados do endereço são: ${costumer.adress.street} ${costumer.adress.number}, ${costumer.adress.neighborhood}, ${costumer.adress.city} - ${costumer.adress.state} `
        );
        console.log(`Seu livro ${title} será entregue em ${date}.`);
      }else if(type === "ebook"){
        console.log(`Uma cópia digital foi enviada para o meu e-mail: ${costumer.mail}, agradecemos pela compra!`)
      }else{
        throw new Error("Por favor, verifique as informações.")
      }
    } catch(error){
    console.log(`Ocorreu um erro: ${error.message}`);
  }
}

let isBookAvailable = findBook("Jogos Vorazes", "físico");

if (isBookAvailable) {
    processOrder(costumer, "Jogos Vorazes", "físico", toSendBooksFormated);
  } 
  

  module.exports = {processOrder, findBook};