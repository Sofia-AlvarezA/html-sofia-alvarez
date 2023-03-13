document.addEventListener("DOMContentLoaded" , () => {
const cardAdj = [
    { name: "cab.jpg", img: "images/cab.jpg" },
    { name: "can.jpg", img: "images/can.jpg" },
    { name: "del.jpg", img: "images/del.jpg" },
    { name: "eso.jpg", img: "images/eso.jpg" },
    { name: "est.jpg", img: "images/est.jpg" },
    { name: "tib.jpg", img: "images/tib.jpg" }
  ];
  
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasescogidas = [];
  var cartasescogidasid = [];
  var catasGanadas = [];
  


//----------------- lecture_03 -----------------//


function crearTablero(){

  for (let i= 0; 1 < cardAdj.lenght; i++) {
    var carta= document.createElement ("img");
  
    carta.setAttribute("src", "images/reverso.png");
  
    carta.setAttribute("data-id", 1);
  
    carta.addEventListener("click", voltearCarta);
  
    cuadricula.appendChild (carta);
    }
  }
  
  );


  //----------------- lecture_03 -----------------//

function voltearCarta(){
  var cartasId = this.getAttribute("data-id");
  cartasEscogidas.push(cardAdj[cartasId].name)
}
);